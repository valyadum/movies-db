import { Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel} from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Controller } from 'react-hook-form';
import { GenresItem, getGenres } from '../../api/tmdb';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

interface CheckedProps {
  control: any;
}


function CheckedFilter({ control }: CheckedProps) {

    const [genres, setGenres] = useState<GenresItem[]>();
    useEffect(() => {
      const fetchGenres = async () => {
        const fetchedGenres = await getGenres();
          setGenres(fetchedGenres);
          console.log(fetchedGenres);
      };
      fetchGenres();
    }, []); 
  
  return (
    <FormControl
      component="fieldset"
      variant="standard"
      sx={{ m: 2, display: "block" }}
    >
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <FormLabel>Genres</FormLabel>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup sx={{ maxHeight: 500 }}>
            <Controller
              control={control}
              name="genres"
              render={({ field }) => (
                <>
                  {genres &&
                    genres.map((genre) => (
                      <FormControlLabel
                        key={genre.id}
                        control={
                          <Checkbox
                            value={genre.id}
                            checked={field.value.includes(genre.id)}
                            onChange={(event, checked) => {
                              const valueNumber = Number(event.target.value);
                              if (checked) {
                                field.onChange([...field.value, valueNumber]);
                              } else {
                                field.onChange(
                                  field.value.filter(
                                    (value: number) => value !== valueNumber
                                  )
                                );
                              }
                            }}
                          />
                        }
                        label={genre.name}
                      />
                    ))}
                </>
              )}
            />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </FormControl>
  );
}

export default CheckedFilter