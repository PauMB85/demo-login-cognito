import React from "react";
import { Button } from "react-bootstrap";
import "./LoaderButton.css";
import  Octicon, { Sync } from "@primer/octicons-react"

export default function LoaderButton({
  isLoading,
  className = "",
  disabled = false,
  ...props
}) {
  return (
    <Button
      className={`LoaderButton ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <Octicon icon={Sync} />}
      {props.children}
    </Button>
  );
}