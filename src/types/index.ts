import { MediaPlayerSettingClass } from "dashjs";

export interface props {
  className?: string
  controls?: boolean
  autoPlay?: boolean
  url: string
  options?: MediaPlayerSettingClass
}

export interface state {
  player: any
}