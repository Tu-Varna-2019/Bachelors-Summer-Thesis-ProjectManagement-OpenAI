/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeProps, CardProps, IconProps, ImageProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BacklogOverridesProps = {
    Backlog?: PrimitiveOverrideProps<ViewProps>;
    aws_image_background_notes?: PrimitiveOverrideProps<ImageProps>;
    aws_image_background?: PrimitiveOverrideProps<ImageProps>;
    "logo-gradient-blue-jira"?: PrimitiveOverrideProps<ViewProps>;
    Jira?: PrimitiveOverrideProps<ViewProps>;
    Vector1782665?: PrimitiveOverrideProps<IconProps>;
    Vector1782666?: PrimitiveOverrideProps<IconProps>;
    Vector1782667?: PrimitiveOverrideProps<IconProps>;
    Vector1782668?: PrimitiveOverrideProps<IconProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
    Vector1782670?: PrimitiveOverrideProps<IconProps>;
    Vector_2?: PrimitiveOverrideProps<IconProps>;
    Vector_3?: PrimitiveOverrideProps<IconProps>;
    sprint1_card?: PrimitiveOverrideProps<CardProps>;
    sprint2_card?: PrimitiveOverrideProps<CardProps>;
    sprint3_card?: PrimitiveOverrideProps<CardProps>;
    sprint4_card?: PrimitiveOverrideProps<CardProps>;
    Badge2402682?: PrimitiveOverrideProps<BadgeProps>;
    Badge2402683?: PrimitiveOverrideProps<BadgeProps>;
    Badge2402684?: PrimitiveOverrideProps<BadgeProps>;
    Badge2402685?: PrimitiveOverrideProps<BadgeProps>;
} & EscapeHatchProps;
export declare type BacklogProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: BacklogOverridesProps | undefined | null;
}>;
export default function Backlog(props: BacklogProps): React.ReactElement;
