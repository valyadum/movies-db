import { FilterAltOffOutlined } from "@mui/icons-material";
import {
  Autocomplete,
  Button,
  debounce,
  FormControl,
  Paper,
  TextField,
} from "@mui/material";
import { key } from "localforage";
import React, { useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { getKeywords } from "../../api/tmdb";
import { useGetGenresQuery, useGetKeywordsQuery } from "../../services/tmbd";
import CheckedFilter from "../CheckedFilter/CheckedFilter";
import RangeSlider from "../RangeSlider/RangeSlider";

export  interface Filters {
  keywords: KeywordsItem[];
  primary_release_year?: number;
  genres?: number[];
}
  interface KeywordsItem {
    id: number;
    name: string;
  }
interface MoviesFilterProps{
  onApply(filters: Filters): void;


}
function MoviesFilter({ onApply }: MoviesFilterProps) {
  const [keywords, setKeywords] = useState<string>('');
  const { data: keywordsOption = [], isLoading: keywordsLoading } =
    useGetKeywordsQuery(keywords,{skip:!keywords});

  const { handleSubmit, control } = useForm<Filters>({
    defaultValues: {
      keywords: [],
      primary_release_year: 1900,
      genres:[],
    },
  });

  const fetchKeyword = useMemo(() =>debounce((query: string) => {setKeywords(query)}, 1000),[]);


  
  return (
    <Paper sx={{ m: 2, p: 0.6 }}>
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
        <CheckedFilter control={control} />
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
