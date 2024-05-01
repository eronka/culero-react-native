import * as React from "react";
import Svg, {
  Path,
  G,
  Circle,
  SvgProps,
  Mask,
  Defs,
  ClipPath,
} from "react-native-svg";

export const GithubIcon = (props: SvgProps) => {
  return (
    <Svg
      width={51}
      height={51}
      viewBox="0 0 51 51"
      fill="none"
      //@ts-ignore
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_421_870)">
        <Mask
          id="a"
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={51}
          height={51}
        >
          <Circle cx={25.5} cy={25.5} r={25.5} fill="#D9D9D9" />
        </Mask>
        <G mask="url(#a)">
          <Path
            d="M17.232 35.594c.089-.133.056-.277-.1-.432-.198-.155-.353-.177-.464-.066-.089.133-.055.276.1.431.199.155.354.177.464.067zm-.93-1.362c-.11-.154-.243-.199-.398-.132-.133.088-.133.221 0 .398.155.177.288.233.399.166.133-.089.133-.232 0-.432zm-1.36-1.328c.044-.088-.012-.177-.167-.265-.155-.045-.243-.023-.265.066-.067.11-.022.2.133.266.177.044.276.022.298-.067zm.697.764c.044-.022.06-.072.05-.15a.254.254 0 00-.117-.182c-.132-.155-.243-.188-.332-.1-.088.089-.077.21.033.366.133.132.255.155.366.066zm2.855 2.49c.044-.155-.055-.276-.299-.365-.199-.066-.343-.022-.431.133-.045.155.055.276.299.365.199.066.343.022.431-.133zm1.395.1c0-.177-.133-.266-.399-.266-.221 0-.332.089-.332.266 0 .177.122.265.365.265.244 0 .366-.088.366-.265zm1.295-.233c-.045-.155-.189-.21-.432-.166-.243.045-.343.144-.299.3.044.176.177.243.399.198.22-.044.332-.154.332-.332zM42.5 25.5c0-4.693-1.66-8.7-4.98-12.02C34.2 10.16 30.193 8.5 25.5 8.5s-8.7 1.66-12.02 4.98C10.16 16.8 8.5 20.807 8.5 25.5c0 3.697 1.085 7.023 3.254 9.977 2.17 2.956 4.958 5.009 8.367 6.16.399.066.692.01.88-.166a.874.874 0 00.282-.664c0-1.151-.01-2.203-.033-3.155-.133.023-.304.05-.515.083-.21.034-.603.056-1.178.067a7.257 7.257 0 01-1.594-.133c-.487-.1-.969-.321-1.444-.664a2.589 2.589 0 01-.98-1.378c-.51-1.306-1.14-2.125-1.893-2.457a.607.607 0 01-.149-.116l-.266-.266-.232-.315.133-.25.647-.116c.133 0 .3.023.498.067.2.044.532.216.996.514a3.2 3.2 0 011.096 1.18c.354.619.77 1.084 1.245 1.394.476.31.958.465 1.445.465a5.98 5.98 0 001.261-.117c.354-.077.686-.182.996-.315.155-1.04.52-1.804 1.096-2.291-1.084-.133-2.036-.338-2.855-.614-.82-.277-1.627-.709-2.424-1.295-.797-.587-1.411-1.428-1.843-2.524-.432-1.095-.647-2.418-.647-3.968 0-1.748.586-3.265 1.76-4.548-.532-1.373-.477-2.878.165-4.516.42-.133 1.024-.05 1.81.25.786.298 1.455.624 2.009.979l.863.53c1.284-.375 2.7-.564 4.25-.564 1.55 0 2.966.188 4.25.565l.946-.598c.388-.243 1.002-.531 1.843-.863.841-.332 1.472-.432 1.893-.299.642 1.638.697 3.143.166 4.516 1.173 1.284 1.76 2.8 1.76 4.549 0 1.261-.155 2.373-.465 3.336-.31.963-.703 1.738-1.18 2.325a6.12 6.12 0 01-1.776 1.477c-.708.399-1.4.686-2.075.863-.675.178-1.433.31-2.274.399.775.686 1.162 1.738 1.162 3.154 0 .886-.006 1.87-.017 2.955a836 836 0 00-.016 1.694c0 .265.094.487.282.664.188.177.482.232.88.166 3.409-1.151 6.198-3.204 8.367-6.16 2.17-2.954 3.254-6.28 3.254-9.977zM51 9.562v31.876c0 2.634-.935 4.886-2.806 6.756-1.87 1.87-4.122 2.806-6.757 2.806H9.564c-2.635 0-4.887-.935-6.757-2.806C.936 46.324 0 44.072 0 41.437V9.564c0-2.635.935-4.887 2.806-6.757C4.676.936 6.928 0 9.563 0h31.874c2.635 0 4.887.935 6.757 2.806C50.064 4.676 51 6.928 51 9.563z"
            fill="#000"
          />
        </G>
      </G>
      <Defs>
        <ClipPath id="clip0_421_870">
          <Path fill="#fff" d="M0 0H51V51H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
