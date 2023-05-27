/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Icon,
  Image,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
import logo from "../../assets/img/logo.jpeg";
import navbar from "../../assets/img/navbar.jpeg";
import footer from "../../assets/img/footer.jpeg";
export default function CajaUsuario(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="1455px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(241,237,237,1)"
      {...getOverrideProps(overrides, "CajaUsuario")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="column"
        width="unset"
        height="1097px"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="66px"
        left="169px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "BG Sistema")}
      >
        <View
          width="1070px"
          height="960px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "BG System")}
        ></View>
      </Flex>
      <Flex
        gap="0"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="252px"
        left="169px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Menu31187")}
      >
        <Image
          width="1072px"
          height="58px"
          display="block"
          gap="unset"
          src={navbar}
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          border="1px SOLID rgba(170,170,170,1)"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "Menu31188")}
        ></Image>
      </Flex>
      <View
        padding="0px 0px 0px 0px"
        width="691px"
        height="42px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="259px"
        left="259px"
        {...getOverrideProps(overrides, "Menu31189")}
      >
        <Flex
          gap="11px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          position="absolute"
          top="10px"
          left="0px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Mantenimiento31190")}
        >
          <Text
            fontFamily="Times New Roman"
            fontSize="19px"
            fontWeight="700"
            color="rgba(91,91,91,1)"
            lineHeight="21.84814453125px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.23px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Mantenimiento"
            {...getOverrideProps(overrides, "Mantenimiento31191")}
          ></Text>
          <View
            width="16px"
            height="16px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "caret-down31192")}
          >
            <Icon
              width="10.24px"
              height="6.6px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 10.2392578125,
                height: 6.59747314453125,
              }}
              paths={[
                {
                  d: "M0.182761 1.23812L4.55089 6.33562C4.62129 6.41775 4.70864 6.48366 4.80692 6.52886C4.90519 6.57405 5.01209 6.59745 5.12026 6.59745C5.22843 6.59745 5.33533 6.57405 5.43361 6.52886C5.53189 6.48366 5.61923 6.41775 5.68964 6.33562L10.0578 1.23812C10.4746 0.751562 10.129 0 9.48839 0L0.750886 0C0.110261 0 -0.235364 0.751562 0.182761 1.23812Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="29.38%"
              bottom="29.38%"
              left="18%"
              right="18%"
              {...getOverrideProps(overrides, "Vector31193")}
            ></Icon>
          </View>
        </Flex>
        <Flex
          gap="13px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          position="absolute"
          top="10px"
          left="198px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Usuarios31194")}
        >
          <Text
            fontFamily="Times New Roman"
            fontSize="19px"
            fontWeight="700"
            color="rgba(91,91,91,1)"
            lineHeight="21.84814453125px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.23px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Usuarios"
            {...getOverrideProps(overrides, "Usuarios31200")}
          ></Text>
          <View
            width="12px"
            height="8px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "caret-down31201")}
          >
            <Icon
              width="10.24px"
              height="6.6px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 10.2392578125,
                height: 6.59747314453125,
              }}
              paths={[
                {
                  d: "M0.182761 1.23812L4.55089 6.33562C4.62129 6.41775 4.70864 6.48366 4.80692 6.52886C4.90519 6.57405 5.01209 6.59745 5.12026 6.59745C5.22843 6.59745 5.33533 6.57405 5.43361 6.52886C5.53189 6.48366 5.61923 6.41775 5.68964 6.33562L10.0578 1.23812C10.4746 0.751562 10.129 0 9.48839 0L0.750886 0C0.110261 0 -0.235364 0.751562 0.182761 1.23812Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="8.77%"
              bottom="8.77%"
              left="7.33%"
              right="7.34%"
              {...getOverrideProps(overrides, "Vector31202")}
            ></Icon>
          </View>
        </Flex>
        <Flex
          gap="14px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          position="absolute"
          top="10px"
          left="341px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Agencias")}
        >
          <Text
            fontFamily="Times New Roman"
            fontSize="19px"
            fontWeight="700"
            color="rgba(91,91,91,1)"
            lineHeight="21.84814453125px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.23px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Agencia"
            {...getOverrideProps(overrides, "Agencia")}
          ></Text>
          <View
            width="12px"
            height="8px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "caret-down31205")}
          >
            <Icon
              width="10.24px"
              height="6.6px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 10.2392578125,
                height: 6.59747314453125,
              }}
              paths={[
                {
                  d: "M0.182761 1.23812L4.55089 6.33562C4.62129 6.41775 4.70864 6.48366 4.80692 6.52886C4.90519 6.57405 5.01209 6.59745 5.12026 6.59745C5.22843 6.59745 5.33533 6.57405 5.43361 6.52886C5.53189 6.48366 5.61923 6.41775 5.68964 6.33562L10.0578 1.23812C10.4746 0.751562 10.129 0 9.48839 0L0.750886 0C0.110261 0 -0.235364 0.751562 0.182761 1.23812Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="8.77%"
              bottom="8.77%"
              left="7.33%"
              right="7.34%"
              {...getOverrideProps(overrides, "Vector31221")}
            ></Icon>
          </View>
        </Flex>
        <Flex
          gap="14px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          position="absolute"
          top="10px"
          left="477px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Reportes31222")}
        >
          <Text
            fontFamily="Times New Roman"
            fontSize="19px"
            fontWeight="700"
            color="rgba(91,91,91,1)"
            lineHeight="21.84814453125px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.23px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Reportes"
            {...getOverrideProps(overrides, "Reportes31223")}
          ></Text>
          <View
            width="12px"
            height="8px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "caret-down31240")}
          >
            <Icon
              width="10.24px"
              height="6.6px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 10.2392578125,
                height: 6.59747314453125,
              }}
              paths={[
                {
                  d: "M0.182761 1.23812L4.55089 6.33562C4.62129 6.41775 4.70864 6.48366 4.80692 6.52886C4.90519 6.57405 5.01209 6.59745 5.12026 6.59745C5.22843 6.59745 5.33533 6.57405 5.43361 6.52886C5.53189 6.48366 5.61923 6.41775 5.68964 6.33562L10.0578 1.23812C10.4746 0.751562 10.129 0 9.48839 0L0.750886 0C0.110261 0 -0.235364 0.751562 0.182761 1.23812Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="8.77%"
              bottom="8.77%"
              left="7.33%"
              right="7.34%"
              {...getOverrideProps(overrides, "Vector31241")}
            ></Icon>
          </View>
        </Flex>
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          position="absolute"
          top="0px"
          left="611px"
          padding="10px 10px 10px 10px"
          {...getOverrideProps(overrides, "Logout31279")}
        >
          <Text
            fontFamily="Times New Roman"
            fontSize="19px"
            fontWeight="700"
            color="rgba(91,91,91,1)"
            lineHeight="21.84814453125px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.23px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Logout"
            {...getOverrideProps(overrides, "Logout31280")}
          ></Text>
        </Flex>
      </View>
      <View
        width="970px"
        height="31px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="564px"
        left="219px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(156,251,255,1)"
        {...getOverrideProps(overrides, "Rectangle 24")}
      ></View>
      <View
        width="970px"
        height="31px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="595px"
        left="219px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 25")}
      ></View>
      <View
        width="970px"
        height="31px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="626px"
        left="219px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(156,251,255,1)"
        {...getOverrideProps(overrides, "Rectangle 26")}
      ></View>
      <View
        width="970px"
        height="31px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="688px"
        left="219px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(156,251,255,1)"
        {...getOverrideProps(overrides, "Rectangle 28")}
      ></View>
      <View
        width="970px"
        height="31px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="657px"
        left="219px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 27")}
      ></View>
      <Icon
        width="970px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 970, height: 1 }}
        paths={[
          {
            d: "M0 0L970 0L970 -1L0 -1L0 0Z",
            stroke: "rgba(112,112,112,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="564px"
        left="219px"
        {...getOverrideProps(overrides, "Line 5")}
      ></Icon>
      <Flex
        gap="0"
        direction="row"
        width="970px"
        height="748px"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="367px"
        left="calc(50% - 485px - 16px)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Linea Sistema")}
      >
        <View
          width="970px"
          height="748px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          border="1px SOLID rgba(170,170,170,1)"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,0)"
          {...getOverrideProps(overrides, "Rectangle 1")}
        ></View>
      </Flex>
      <Image
        width="493px"
        height="120px"
        display="block"
        gap="unset"
        alignItems="unset"
        src={logo}
        justifyContent="unset"
        position="absolute"
        top="100px"
        left="463px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "logo")}
      ></Image>
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="1204px"
        left="155px"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "Footer")}
      >
        <Text
          fontFamily="Times New Roman"
          fontSize="14px"
          fontWeight="400"
          color="rgba(92,91,91,1)"
          lineHeight="16.0986328125px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Copyright (c) 2012 - 2023 CCM. All rights reserved"
          {...getOverrideProps(
            overrides,
            "Copyright (c) 2012 - 2023 CCM. All rights reserved"
          )}
        ></Text>
        <Image
          width="1070px"
          height="128px"
          display="block"
          gap="unset"
          src={footer}
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "footer")}
        ></Image>
      </Flex>
      <Text
        fontFamily="Times New Roman"
        fontSize="32px"
        fontWeight="400"
        color="rgba(92,91,91,1)"
        lineHeight="36.796875px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="970px"
        height="34px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="396px"
        left="219px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Caja - %Usuario%"
        {...getOverrideProps(overrides, "Caja - %Usuario%")}
      ></Text>
      <Text
        fontFamily="Times New Roman"
        fontSize="18px"
        fontWeight="700"
        color="rgba(92,91,91,1)"
        lineHeight="20.6982421875px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="515px"
        left="251px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="ID"
        {...getOverrideProps(overrides, "ID")}
      ></Text>
      <Text
        fontFamily="Times New Roman"
        fontSize="18px"
        fontWeight="700"
        color="rgba(92,91,91,1)"
        lineHeight="20.6982421875px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="65px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="515px"
        left="336px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Usuario"
        {...getOverrideProps(overrides, "Usuario")}
      ></Text>
      <Text
        fontFamily="Times New Roman"
        fontSize="18px"
        fontWeight="700"
        color="rgba(92,91,91,1)"
        lineHeight="20.6982421875px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="150px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="515px"
        left="491px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Fecha/Hora"
        {...getOverrideProps(overrides, "Fecha/Hora")}
      ></Text>
      <Text
        fontFamily="Times New Roman"
        fontSize="18px"
        fontWeight="700"
        color="rgba(92,91,91,1)"
        lineHeight="20.6982421875px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="83px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="515px"
        left="700px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Efectivo"
        {...getOverrideProps(overrides, "Efectivo")}
      ></Text>
      <Text
        fontFamily="Times New Roman"
        fontSize="18px"
        fontWeight="700"
        color="rgba(92,91,91,1)"
        lineHeight="20.6982421875px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="83px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="515px"
        left="870px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Cheque"
        {...getOverrideProps(overrides, "Cheque31359")}
      ></Text>
      <Text
        fontFamily="Times New Roman"
        fontSize="18px"
        fontWeight="700"
        color="rgba(92,91,91,1)"
        lineHeight="20.6982421875px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="68px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="515px"
        left="1048px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Tarjeta"
        {...getOverrideProps(overrides, "Tarjeta31360")}
      ></Text>
      <Text
        fontFamily="Times New Roman"
        fontSize="14px"
        fontWeight="700"
        color="rgba(92,91,91,1)"
        lineHeight="16.0986328125px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="125px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="843px"
        left="346px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Retiro Efectivo"
        {...getOverrideProps(overrides, "Retiro Efectivo")}
      ></Text>
      <Text
        fontFamily="Times New Roman"
        fontSize="14px"
        fontWeight="700"
        color="rgba(92,91,91,1)"
        lineHeight="16.0986328125px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="65px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="897px"
        left="242px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Totales:"
        {...getOverrideProps(overrides, "Totales:")}
      ></Text>
      <Text
        fontFamily="Times New Roman"
        fontSize="14px"
        fontWeight="700"
        color="rgba(92,91,91,1)"
        lineHeight="16.0986328125px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="51px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="843px"
        left="625px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Tarjeta"
        {...getOverrideProps(overrides, "Tarjeta31365")}
      ></Text>
      <Text
        fontFamily="Times New Roman"
        fontSize="14px"
        fontWeight="700"
        color="rgba(92,91,91,1)"
        lineHeight="16.0986328125px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="84px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="842px"
        left="508px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Cheque"
        {...getOverrideProps(overrides, "Cheque31366")}
      ></Text>
      <Text
        fontFamily="Times New Roman"
        fontSize="14px"
        fontWeight="700"
        color="rgba(92,91,91,1)"
        lineHeight="16.0986328125px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="155px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="843px"
        left="742px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Total con Apertura"
        {...getOverrideProps(overrides, "Total con Apertura")}
      ></Text>
      <Text
        fontFamily="Times New Roman"
        fontSize="14px"
        fontWeight="700"
        color="rgba(92,91,91,1)"
        lineHeight="16.0986328125px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="83px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="843px"
        left="924px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Declarado"
        {...getOverrideProps(overrides, "Declarado")}
      ></Text>
      <Text
        fontFamily="Times New Roman"
        fontSize="14px"
        fontWeight="700"
        color="rgba(92,91,91,1)"
        lineHeight="16.0986328125px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="76px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="843px"
        left="1078px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Diferencia"
        {...getOverrideProps(overrides, "Diferencia")}
      ></Text>
      <Text
        fontFamily="Times New Roman"
        fontSize="18px"
        fontWeight="700"
        color="rgba(92,91,91,1)"
        lineHeight="20.6982421875px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="754px"
        left="568px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="TOTALES:"
        {...getOverrideProps(overrides, "TOTALES:")}
      ></Text>
      <Text
        fontFamily="Times New Roman"
        fontSize="18px"
        fontWeight="700"
        color="rgba(92,91,91,1)"
        lineHeight="20.6982421875px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="754px"
        left="1046px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="$ 9999.99"
        {...getOverrideProps(overrides, "$ 9999.9931371")}
      ></Text>
      <Text
        fontFamily="Times New Roman"
        fontSize="18px"
        fontWeight="700"
        color="rgba(92,91,91,1)"
        lineHeight="20.6982421875px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="754px"
        left="876px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="$ 9999.99"
        {...getOverrideProps(overrides, "$ 9999.9931372")}
      ></Text>
      <Text
        fontFamily="Times New Roman"
        fontSize="18px"
        fontWeight="700"
        color="rgba(92,91,91,1)"
        lineHeight="20.6982421875px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="754px"
        left="706px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="$ 9999.99"
        {...getOverrideProps(overrides, "$ 9999.9931373")}
      ></Text>
      <TextField
        width="209px"
        height="40px"
        placeholder="Cliente"
        position="absolute"
        top="910px"
        left="666px"
        size="default"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        {...getOverrideProps(overrides, "TextField641356")}
      ></TextField>
      <Button
        width="117px"
        height="29px"
        position="absolute"
        border="1px SOLID rgba(0,0,0,1)"
        top="1034px"
        left="892px"
        backgroundColor="rgba(217,217,217,1)"
        size="large"
        isDisabled={false}
        variation="default"
        children="Guardar"
        fontSize="inherit"
        borderRadius="inherit"
        {...getOverrideProps(overrides, "Button641357")}
      ></Button>
      <Button
        width="117px"
        height="29px"
        position="absolute"
        border="1px SOLID rgba(0,0,0,1)"
        top="1034px"
        left="1028px"
        backgroundColor="rgba(217,217,217,1)"
        size="large"
        isDisabled={false}
        variation="default"
        fontSize="inherit"
        borderRadius="inherit"
        children="Cierre"
        {...getOverrideProps(overrides, "Button641367")}
      ></Button>
      <TextField
        width="209px"
        height="40px"
        placeholder="Monto"
        position="absolute"
        top="910px"
        left="906px"
        size="default"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        {...getOverrideProps(overrides, "TextField641386")}
      ></TextField>
    </View>
  );
}
