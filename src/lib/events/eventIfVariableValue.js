export const id = "EVENT_IF_VALUE";

export const fields = [
  {
    key: "variable",
    type: "variable",
    defaultValue: "LAST_VARIABLE"
  },
  {
    key: "operator",
    type: "operator",
    width: "50%",
    defaultValue: "=="
  },
  {
    key: "comparator",
    type: "number",
    min: 0,
    max: 255,
    width: "50%",
    defaultValue: "0"
  },
  {
    key: "true",
    type: "events"
  },
  {
    key: "false",
    type: "events"
  }
];

export const compile = (input, helpers) => {
  const { ifVariableValue } = helpers;
  ifVariableValue(
    input.variable,
    input.operator,
    input.comparator,
    input.true,
    input.false
  );
};
