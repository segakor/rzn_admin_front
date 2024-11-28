export const configToolbar = {
  default: [
    [
      "Undo",
      "Redo",
      "Bold",
      "Italic",
      "-",
      "BulletedList",
      "-",
      "Link",
      "-",
      "Table",
    ],
    "/",
    ["Source"],
  ],
  longread: [
    ["CreateDiv"],
    "/",
    [
      "Undo",
      "Redo",
      "-",
      "Format",
      "Bold",
      "Italic",
      "-",
      "BulletedList",
      "-",
      "Link",
      "-",
      "Blockquote",
      "-",
      "Table",
    ],
    ["Image"],
    "/",
    ["Source", /* "Preview", */ "Find", "ShowBlocks"],
  ],
};

export const configStylesSet = [
  {
    name: "itemBlock",
    element: "div",
    attributes: {
      class:
        "itemBlock bg-white md:p-[50px] p-[30px] rounded-[30px] grid gap-7 shadow-md",
    },
  },
  {
    name: "factBlock",
    element: "div",
    attributes: {
      class:
        "factBlock p-[30px] bg-[#5363f7] rounded-[30px] text-white before:content-[url('/factBlock/fact.svg')] grid gap-3 items-center",
    },
  },
  {
    name: "quoteBlock",
    element: "div",
    attributes: {
      class:
        "quoteBlock p-[30px] bg-[#252525] text-white rounded-[30px] before:content-[url('/quoteBlock/quote.svg')] grid gap-3",
    },
  },
];
