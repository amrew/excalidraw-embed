import React from "react";

import { InitializeApp } from "./components/InitializeApp";
import App from "./components/App";

import "../public/fonts.css";
import "../public/app.css";
import "./css/styles.scss";

import { ExcalidrawProps } from "./types";

const Excalidraw = (props: ExcalidrawProps) => {
  const {
    width,
    height,
    onChange,
    onBlur,
    initialData,
    user,
    onUsernameChange,
    options,
    version,
    value,
    zoom,
    readonly,
  } = props;

  return (
    <InitializeApp>
      <App
        width={width}
        height={height}
        onChange={onChange}
        onBlur={onBlur}
        initialData={initialData}
        user={user}
        onUsernameChange={onUsernameChange}
        options={options}
        version={version}
        value={value}
        zoom={zoom}
        readonly={readonly}
      />
    </InitializeApp>
  );
};
export default Excalidraw;
