import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const SkeletonLoading = ({ height }) => {
  const SKELETON_NO = 15;
  const tenSkeletonLine = (skeletonNumber) => {
    let skeletons = [];

    for (let i = 0; i < skeletonNumber; i++) {
      skeletons.push(
        <Skeleton key={i} variant="rounded" height={42} sx={{ margin: 1 }} />
      );
    }
    return skeletons;
  };
  const Skeletons = tenSkeletonLine(SKELETON_NO);
  return (
    <>
      <Box sx={{ width: "100%", p: 2, height }}>
        {Skeletons.map((skeleton) => skeleton)}
      </Box>
    </>
  );
};

export default SkeletonLoading;
