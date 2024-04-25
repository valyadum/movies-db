import { FilterAltOffOutlined } from "@mui/icons-material";
import {
  Autocomplete,
  Button,
  debounce,
  FormControl,
  Paper,
  TextField,
} from "@mui/material";
import React, { useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { getKeywords } from "../../api/tmdb";
import RangeSlider from "../RangeSlider/RangeSlider";

export  interface Filters {
  keywords: KeywordsItem[];
  primary_release_year: number;
}
  interface KeywordsItem {
    id: number;
    name: string;
  }
interface MoviesFilterProps{
  onApply(filters: Filters): void;


}
function MoviesFilter({ onApply}: MoviesFilterProps) {
  const [keywordsLoading, setKeywordsLoading] = useState(false);
  const [keywordsOption, setKeywordsOption] = useState<KeywordsItem[]>([]);

  const { handleSubmit, control } = useForm<Filters>({
    defaultValues: {
      keywords: [],
      primary_release_year: 2024,
    },
  });

  const fetchKeyword = useMemo(
    () =>
      debounce(async (query: string) => {
        if (query) {
          setKeywordsLoading(true);
          const options = await getKeywords(query);
          console.log(options);

          setKeywordsLoading(false);
          setKeywordsOption(options);
        } else {
          setKeywordsOption([]);
        }
      }, 1000),
    []
  );
  return (
    <Paper sx={{ m: 2, p: 0.5 }}>
      <form onSubmit={handleSubmit(onApply)}>
        <FormControl
          component="fieldset"
          variant="standard"
          sx={{ m: 2, display: "block" }}
        >
          <Controller
            control={control}
            name="keywords"
            render={({ field: { onChange, value } }) => (
              <Autocomplete
                multiple
                disablePortal
                loading={keywordsLoading}
                options={keywordsOption}
                filterOptions={(x) => x}
                getOptionLabel={(option) => option.name}
                onChange={(_, value) => onChange(value)}
                value={value}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                renderInput={(params) => (
                  <TextField {...params} label="Keywords" />
                )}
                onInputChange={(_, value) => fetchKeyword(value)}
              />
            )}
          />
        </FormControl>
        <RangeSlider control={control} />
        <Button
          type="submit"
          variant="contained"
          startIcon={<FilterAltOffOutlined />}
          sx={{ m: 2 }}
        >
          Apply Filter
        </Button>
      </form>
    </Paper>
  );
}

export default MoviesFilter;
