import { BuildOptions } from "./types/config"
import type {Configuration as DevServerConfifuration} from 'webpack-dev-server'

export function buildDevServer (options: BuildOptions): DevServerConfifuration {
  return {
    port: options.port,
    open: true,
  }
}