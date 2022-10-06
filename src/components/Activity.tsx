interface Props {
    activity: string;
    type?: string;
    busy?: boolean;
    onClickNext: () => void;
  }
  
  export const Activity = (props: Props) => {
    return (
      <div className="activity">
        <button aria-busy={props.busy} onClick={props.onClickNext}>
          {props.busy ? "Loading..." : "Next random activity"}
        </button>
        {props.type ? (
          <div>
            <p className="activity_title">{props.type.toUpperCase()}</p>
            <p className="activity_text">{props.activity}</p>
          </div>
        ) : (
          <p className="activity_text">Нажми на кнопку, получишь результат.</p>
        )}
      </div>
    );
  };
  