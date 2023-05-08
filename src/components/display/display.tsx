import "./display.css";

type Props = { primaryText: string; secondaryText: string };

export function Display({ primaryText, secondaryText }: Props) {
  return (
    <div className="display">
      <h3 className="secondary">{secondaryText}</h3>
      <h1 className="primary">{primaryText}</h1>
    </div>
  );
}
