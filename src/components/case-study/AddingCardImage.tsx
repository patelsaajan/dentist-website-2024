import { Delete } from "@mui/icons-material";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import Image from "next/image";

type addingCardImageProps = {
  photoFile: File;
  handleClearChange: () => void;
};

const AddingCardImage = ({
  photoFile,
  handleClearChange,
}: addingCardImageProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Image
        src={URL.createObjectURL(photoFile)}
        width={400}
        height={300}
        alt="Selected hero photo"
        style={{
          borderRadius: "12px",
        }}
      />
      <Typography variant="body1">{photoFile.name}</Typography>
      <Tooltip title="Clear Image">
        <IconButton onClick={handleClearChange}>
          <Delete />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default AddingCardImage;
