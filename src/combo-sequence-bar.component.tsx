/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { observer } from "mobx-react-lite";
import * as React from "react";
import { CDN_URL_NEW } from "./app.config";
import { Nullable } from "./common/lang.types";

const boxMixinCss = css`
  width: 48px;
  height: 48px;
  border-radius: 3px;
  overflow: hidden;
`;

const itemCss = css`
  ${boxMixinCss};
`;

interface ChampionComboIconProps {
  skill: string;
  championSlug: string;
  className?: string;
}

const ChampionComboIcon: React.FC<ChampionComboIconProps> = observer(
  (props) => {
    const { skill, championSlug } = props;

    if (
      skill.toUpperCase() === "F" ||
      skill.toUpperCase() === "SUMMONERFLASH"
    ) {
      return (
        <img
          css={itemCss}
          src={`${CDN_URL_NEW}/lol/spell/${skill}.webp`}
          alt="Flash image"
        />
      );
    }

    return (
      <img
        css={itemCss}
        src={`${CDN_URL_NEW}/lol/spell/${skill}.webp?1`}
        alt="Skill image"
      />
    );
  }
);

const wrapperCss = css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const IconsContainer = styled.div`
  display: flex;
  margin: 4px 0;
  flex-shrink: 0;
`;

const arrowIconCss = css`
  width: 16px;
  height: 16px;
  margin: 0 4px;
  flex-shrink: 0;
`;

interface ComboSequenceBarProps {
  combo: Nullable<string[]>;
  championSlug: string;
  className?: string;
}

const ComboSequenceBar: React.ForwardRefRenderFunction<
  HTMLDivElement,
  ComboSequenceBarProps
> = (props, ref: React.Ref<HTMLDivElement>) => {
  const { className, combo, championSlug } = props;

  const comboItems = React.useMemo(() => {
    return combo?.map((item: string, index: number) => {
      const items = item.split(/\s*,\s*/).map((it: string) => {
        const itSkill = it.trim();
        return (
          <ChampionComboIcon
            skill={itSkill}
            championSlug={championSlug}
            key={itSkill}
          />
        );
      });
      return (
        <React.Fragment key={index}>
          <IconsContainer>{items}</IconsContainer>
          {index + 1 < combo.length && (
            <img
              key={`${item} + ${index} + arrow`}
              css={arrowIconCss}
              src={`https://icons.veryicon.com/png/o/miscellaneous/8atour/arrow-right-50.png`}
              alt={""}
              aria-hidden
            />
          )}
        </React.Fragment>
      );
    });
  }, [championSlug, combo]);

  return (
    <div className={className} ref={ref} css={wrapperCss}>
      {comboItems}
    </div>
  );
};
const ComboSequenceBarWithRef = React.forwardRef(ComboSequenceBar);

export { ComboSequenceBarWithRef as ComboSequenceBar };
