interface Props {
    fact: string;
    busy?: boolean;
    onClickNext: () => void;
  }
  
  export const CatFact = (props: Props) => {
    return (
      <div className="Fact">
        <button aria-busy={props.busy} onClick={props.onClickNext}>
          {props.busy ? "Loading..." : "Next random fact"}
        </button>
        <blockquote className="Fact_Text">{props.fact}</blockquote>
      </div>
    );
  };
  