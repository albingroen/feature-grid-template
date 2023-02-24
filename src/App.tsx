import cn from "./lib/classNames";
import { DetailedHTMLProps, HTMLAttributes } from "react";

// Here you can customize the grid
const FEATURE_ROUNDING = 25;
const GRID_RATIO = "5/4.2";
const COLS = 3;
const GAP = 20;

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-10 bg-gray-300">
      <div
        style={{
          gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))`,
          aspectRatio: GRID_RATIO,
          gridGap: GAP,
        }}
        className="grid w-full max-w-screen-2xl"
      >
        <Feature cols={2} />
        <Feature cols={1} />
        <Feature cols={1} />
        <Feature cols={1} />
        <Feature cols={1} />
        <Feature cols={1} />
        <Feature cols={2} />
      </div>
    </div>
  );
}

interface FeatureProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  rows?: number;
  cols?: number;
}

const Feature = ({
  cols = 1,
  rows = 1,
  className,
  children,
  style,
  ...rest
}: FeatureProps) => {
  return (
    <div
      {...rest}
      className={cn(
        "bg-gray-200 flex flex-col items-center justify-center divide-y shadow-xl shadow-gray-300",
        className
      )}
      style={{
        gridColumn: `span ${cols} / span ${cols}`,
        gridRow: `span ${rows} / span ${rows}`,
        borderRadius: FEATURE_ROUNDING,
        ...(style || {}),
      }}
    >
      {children}
    </div>
  );
};

export default App;
