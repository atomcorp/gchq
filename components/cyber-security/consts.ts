const staticRoutesArrays = [
  [
    [0, 0],
    [0, 1],
  ],
  [
    [0, 2],
    [0, 1],
  ],
  [
    [0, 4],
    [0, 1],
  ],
  [
    [0, 3],
    [0, 4],
  ],
  [
    [1, 3],
    [0, 3],
  ],
  [
    [1, 4],
    [1, 1],
  ],
  [
    [1, 5],
    [1, 2],
  ],
];

const dynamicRoutesArrays = [
  [
    [0, 0],
    [0, 3],
  ],
  [
    [0, 2],
    [0, 5],
  ],
  [
    [0, 0],
    [1, 0],
  ],
  [
    [0, 1],
    [1, 1],
  ],
  [
    [0, 2],
    [1, 2],
  ],
  [
    [0, 4],
    [1, 4],
  ],
  [
    [0, 5],
    [1, 5],
  ],
  [
    [1, 0],
    [1, 1],
  ],
  [
    [1, 1],
    [1, 2],
  ],
  [
    [1, 3],
    [1, 0],
  ],
  [
    [1, 4],
    [1, 3],
  ],
  [
    [1, 5],
    [1, 4],
  ],
];

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

export const keyCoordsArray = ["1,2", "1,3"];
