import { ElementType } from "react";

export type TVariant =
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "body"
    | "body-small"
    | "tiny"
    | "small"
    | "medium"
    | "large";

export interface ITypographyProps {
    variant?: TVariant;
    children?: React.ReactNode;
    className?: string;
    as?: ElementType;
}