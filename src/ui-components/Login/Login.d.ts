/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, ImageProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LoginOverridesProps = {
    Login?: PrimitiveOverrideProps<ViewProps>;
    "BG Sistema"?: PrimitiveOverrideProps<FlexProps>;
    "BG System"?: PrimitiveOverrideProps<ViewProps>;
    Menu124?: PrimitiveOverrideProps<FlexProps>;
    Menu125?: PrimitiveOverrideProps<ImageProps>;
    logo?: PrimitiveOverrideProps<ImageProps>;
    "User:"?: PrimitiveOverrideProps<TextProps>;
    TextField641081?: PrimitiveOverrideProps<TextFieldProps>;
    "Password:"?: PrimitiveOverrideProps<TextProps>;
    TextField6214006?: PrimitiveOverrideProps<TextFieldProps>;
    "\u00BFOlvidaste la contrase\u00F1a?"?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type LoginProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: LoginOverridesProps | undefined | null;
}>;
export default function Login(props: LoginProps): React.ReactElement;
