A little template for creating marketing feature-grids

![Feature Grid](https://user-images.githubusercontent.com/19674362/221247213-e3d85127-8b33-480e-a874-68aab1aea198.png)

These are the variables you can use to change the type of the grid

```typescript
const FEATURE_ROUNDING = 25;
const GRID_RATIO = "5/4.2";
const COLS = 3;
const GAP = 20;
```

And then you can create your grid by playing with these components

```typescript
<Feature cols={2} />
<Feature cols={1} />
<Feature cols={1} />
<Feature cols={1}>
  {/* Any content */ }
</Feature>
<Feature cols={1} />
<Feature cols={1} />
<Feature cols={2} />
```
