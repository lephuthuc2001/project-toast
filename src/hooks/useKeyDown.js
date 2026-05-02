import React from "react";

function useKeyDown(key, callback) {
  if (typeof callback !== "function" || typeof key !== "string") {
    throw new Error("Invalid params");
  }
  React.useEffect(
    function () {
      function handleKeyDown(keyEvent) {
        if (keyEvent.key === key) {
          callback();
        }
      }

      window.addEventListener("keydown", handleKeyDown);

      const destroyEffect = () => {
        window.removeEventListener("keydown", handleKeyDown);
      };

      return destroyEffect;
    },
    [key, callback],
  );
}

export default useKeyDown;
