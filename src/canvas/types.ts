export interface CanvasProps extends React.CanvasHTMLAttributes<HTMLCanvasElement> {
  id: string;
  elementOnFocus: boolean;
  posterPath: string;
  dimensions: number[];
  onCardFocus: () => void;
}

export interface CanvasHeroProps extends React.CanvasHTMLAttributes<HTMLCanvasElement> {
  id: string;
  backdropPath: string;
  dimensions: number[];
}

export type CanvasHandlerArgsType = [HTMLCanvasElement, CanvasRenderingContext2D]

export type CanvasHandler = ([canvas, context]: CanvasHandlerArgsType) => void
