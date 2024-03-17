"use client";

import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

import Modal from "@/components/modal";

interface Board {
  index: number;
  value: "Player" | "Bot" | "";
}

const blankBoard = Array.from({ length: 9 }).map(
  (_, index) =>
    ({
      index,
      value: "",
    }) as Board,
);

export default function TicTacToePage() {
  const [board, setBoard] = useState<Board[]>(blankBoard);
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const checkGameEnded = (currBoard: Board[]) => {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    const full = currBoard.every((item) => item.value !== "");
    if (full) {
      setMessage("Draw!");
      setIsOpen(true);
      return true;
    }

    const mappedBoard = winConditions.map((winArr) => {
      return winArr.map((item) => currBoard[item]);
    });
    const playerWin = mappedBoard.find((boardCondition) =>
      boardCondition.every((item) => item.value === "Player"),
    );
    if (playerWin) {
      setMessage("Player Win!");
      setIsOpen(true);
      return true;
    }
    const botWin = mappedBoard.find((boardCondition) =>
      boardCondition.every((item) => item.value === "Bot"),
    );
    if (botWin) {
      setMessage("Bot Win!");
      setIsOpen(true);
      return true;
    }
    return false;
  };

  const updateBoard = useMutation<Board[], Error, Board[]>({
    mutationFn: async (data) => {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API}/xo`, {
        board: data,
      });
      return res.data;
    },
    onSuccess: (data) => {
      checkGameEnded(data);
      setBoard(data);
    },
  });

  const handleBoardChanage = async (index: number) => {
    const arr = [...board];
    arr[index] = { ...arr[index], value: "Player" };
    const ended = checkGameEnded(arr);
    if (!ended) updateBoard.mutate(arr);
  };

  return (
    <>
      <div className="mx-auto mt-5 grid w-full max-w-[800px] grid-cols-[repeat(3,minmax(0,33.34%))] grid-rows-3 justify-center border">
        {board.map((item, index) => (
          <div
            key={index}
            className="relative size-full h-full border pb-[100%]"
            onClick={() => handleBoardChanage(index)}
          >
            <div className="absolute inset-0 flex items-center justify-center self-center">
              {item.value && (
                <img
                  src={`/${item.value}.png`}
                  className="size-2/5"
                  alt={item.value}
                />
              )}
            </div>
          </div>
        ))}
      </div>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          setBoard(blankBoard);
          setMessage("");
        }}
      >
        {message}
      </Modal>
    </>
  );
}
