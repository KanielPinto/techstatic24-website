import { IcosahedronBufferGeometry, Points } from "three";

import { material } from "./material";

const geometry = new IcosahedronBufferGeometry(3, 7);
export const mesh = new Points(geometry, material);
