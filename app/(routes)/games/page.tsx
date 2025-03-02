import Container from "@/app/components/shared/games/container";
import React from "react";
import ConfettiButton from "@/app/components/shared/confetti";

function Games() {
  return (
    <div>
      <div className="p-3">
        <Container />
        <ConfettiButton />
      </div>
    </div>
  );
}

export default Games;
