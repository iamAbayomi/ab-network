import { Box, Text, Image, Button, Toast } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import products from "utils/products.json";
import { GeoPosition } from "geo-position.ts";
import { toast } from "react-toast";

const Index = () => {
  const [coordinate, setCoordinate] = useState<{
    latitude: number;
    longitude: number;
  }>({
    latitude: 0,
    longitude: 0
  });

  const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
  `;

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  }

  async function showPosition(position: any) {
    setCoordinate({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });

    let xPoint = new GeoPosition(coordinate.latitude, coordinate.longitude);
    let yPoint = await new GeoPosition(6.4253, 3.4095);
    let distanceAway = +xPoint.Distance(yPoint).toFixed(0);

    if (distanceAway <= 50000) {
      toast.success("Order Placed Successfully");
    } else {
      toast.error(
        ` Order not placed becaause you are ${distanceAway} meters away. `
      );
    }
  }

  return (
    <Box display={"flex"}>
      <Box background={"black"} width={"280px"} height={"100vh"}></Box>
      <Box
        display={"grid"}
        maxWidth={"900px"}
        margin={"40px auto"}
        gridTemplateColumns={"210px 210px 210px 210px"}
        alignItems={"start"}
        gap={"50px"}
      >
        {products?.map((products) => (
          <Card>
            <Box w={"100%"} maxW={"200px"} p={"20px"}>
              <Image src={products?.image} />
              <Text m={"15px 0px 5px"}>{products?.name}</Text>

              <Text fontSize={"12px"}>{products?.description}</Text>
              <Text m={"10px 0px 10px"}>{products?.price}</Text>
              <Button onClick={getLocation}>Order</Button>
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Index;
