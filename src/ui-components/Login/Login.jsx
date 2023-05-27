/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React, { useState } from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Image,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
import logo from "../../assets/img/logo.jpeg";
import navbar from "../../assets/img/navbar.jpeg";
import { useForm } from "react-hook-form";
import { postLogin } from "./services/api.js";
import { useNavigate } from "react-router-dom";
import { setToken } from "../../helpers/auth";

export default function Login(props) {
  const { overrides, ...rest } = props;
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const onSubmit = async (data) => {
    const response = await postLogin(data);
    if (response.ok) {
      setToken(response);
      setError("");
      navigate("login2");
    } else {
      setError(response.message);
    }
  };

  return (
    <View
      height="100vh"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Login")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        position="absolute"
        top="65px"
        left="169px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "BG Sistema")}
      >
        <View
          width="1070px"
          height="822px"
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
        position="relative"
        top="252px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Menu124")}
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
          left="50%"
          transform="translate(-50%, -50%)"
          {...getOverrideProps(overrides, "Menu125")}
        ></Image>
      </Flex>
      <div position="relative">
        <Image
          width="493px"
          height="120px"
          display="block"
          gap="unset"
          src={logo}
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="100px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          left="50%"
          transform="translate(-50%, -50%)"
          {...getOverrideProps(overrides, "logo")}
        ></Image>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div position="relative">
            <Text
              fontFamily="Times New Roman"
              fontSize="19px"
              fontWeight="400"
              color="rgba(92,91,91,1)"
              lineHeight="21.84814453125px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="50%"
              left="574px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="User:"
              transform="translate(-50%, -50%)"
              {...getOverrideProps(overrides, "User:")}
            ></Text>
            <TextField
              width="270px"
              height="unset"
              position="absolute"
              top="50%"
              left="50%"
              size="default"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              {...register("username", { required: true })}
              transform="translate(-50%, -50%)"
              {...getOverrideProps(overrides, "TextField641081")}
            ></TextField>

            <Text
              fontFamily="Times New Roman"
              fontSize="19px"
              fontWeight="400"
              color="rgba(92,91,91,1)"
              lineHeight="21.84814453125px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="60%"
              left="559px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Password:"
              transform="translate(-50%, -50%)"
              {...getOverrideProps(overrides, "Password:")}
            ></Text>

            <TextField
              width="270px"
              height="unset"
              position="absolute"
              top="60%"
              left="50%"
              size="default"
              isDisabled={false}
              labelHidden={false}
              {...register("password", { required: true })}
              variation="default"
              transform="translate(-50%, -50%)"
              {...getOverrideProps(overrides, "TextField6214006")}
            ></TextField>
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
              position="absolute"
              top="656px"
              left="50%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              transform="translate(-50%, -50%)"
              children="¿Olvidaste la contraseña?"
              {...getOverrideProps(
                overrides,
                "\u00BFOlvidaste la contrase\u00F1a?"
              )}
            ></Text>
            <Text
              fontFamily="Times New Roman"
              fontSize="14px"
              fontWeight="400"
              color="red"
              lineHeight="16.0986328125px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="556px"
              left="50%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              transform="translate(-50%, -50%)"
              children={error}
              {...getOverrideProps(overrides, "Error")}
            ></Text>
            <Button
              width="117px"
              height="29px"
              position="absolute"
              border="1px SOLID rgba(0,0,0,1)"
              top="613px"
              left="50%"
              backgroundColor="rgba(217,217,217,1)"
              size="large"
              isDisabled={false}
              variation="default"
              children="Login"
              fontSize="inherit"
              borderRadius="inherit"
              transform="translate(-50%, -50%)"
              type="submit"
              {...getOverrideProps(overrides, "Button")}
            ></Button>
          </div>
        </form>
      </div>
    </View>
  );
}
