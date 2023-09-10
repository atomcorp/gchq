import getLinePoints from "./getLinePoints";

export const staticRoutesArrays = [
  [
    [1, 5],
    [3, 5],
  ],
  [
    [5, 5],
    [3, 5],
  ],
  [
    [4, 7],
    [3, 5],
  ],
  [
    [2, 7],
    [4, 7],
  ],
  [
    [6, 7],
    [4, 7],
  ],
  [
    [2, 3],
    [2, 7],
  ],
  [
    [4, 3],
    [3, 1],
  ],
  [
    [6, 3],
    [5, 1],
  ],
];

export const dynamicRoutesArrays = [
  [
    [1, 5],
    [2, 7],
  ],
  [
    [5, 5],
    [6, 7],
  ],
  [
    [1, 5],
    [1, 1],
  ],
  [
    [3, 5],
    [3, 1],
  ],
  [
    [5, 5],
    [5, 1],
  ],
  [
    [4, 7],
    [4, 3],
  ],
  [
    [6, 7],
    [6, 3],
  ],
  [
    [1, 1],
    [3, 1],
  ],
  [
    [3, 1],
    [5, 1],
  ],
  [
    [2, 3],
    [1, 1],
  ],
  [
    [4, 3],
    [2, 3],
  ],
  [
    [6, 3],
    [4, 3],
  ],
];

export const nodePoints = [
  [1, 1],
  [3, 1],
  [4, 3],
  [6, 3],
  [1, 5],
  [3, 5],
  [5, 5],
  [2, 7],
  [4, 7],
];

export const keyPoints = [
  [2, 3],
  [5, 1],
];

export const finishPoint = [6, 7];

export const playerPoint = [1, 5];

const invertedDynamicRoutesArrays = dynamicRoutesArrays.map((route) => [
  route[1],
  route[0],
]);

const getRoutes = (routeArrays: number[][][]) =>
  routeArrays.reduce((acc, route) => {
    const str = route.toString();
    acc[str] = true;
    return acc;
  }, {} as Record<string, boolean>);

export const staticRoutes = getRoutes(staticRoutesArrays);
export const dynamicRoutes = getRoutes(dynamicRoutesArrays);
export const invertedDynamicRoutes = getRoutes(invertedDynamicRoutesArrays);

export const keyCoordsArray = keyPoints.map((keyPoint) => keyPoint.toString());

export const staticLinePoints = staticRoutesArrays.map((route) =>
  getLinePoints(route)
);
export const dynamicLinePoints = dynamicRoutesArrays.map((route) =>
  getLinePoints(route)
);
export const invertedDynamicLinePoints = invertedDynamicRoutesArrays.map(
  (route) => getLinePoints(route)
);
