import {Autocomplete, TextField} from "@mui/material";
import {useState} from "react";

const MultipleSelectPage = () => {
    const top100Films = [
        {title: 'The Shawshank Redemption', year: 1994},
        {title: 'The Part II', year: 1974},
        {title: 'The Dark Knight', year: 2008},
    ];
    const [formState, setFormState] = useState({
        userRoles: []
    });

    const handleFieldChange = event => {
        setFormState(formState => ({
            ...formState,
            [event.target.name]:
                event.target.type === "checkbox"
                    ? event.target.checked
                    : event.target.value
        }));
    };

    console.log(formState)

    return (
        <div className="MultipleSelectPage">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Autocomplete
                            multiple
                            id="tags-outlined"
                            options={top100Films}
                            getOptionLabel={(option) => option.title}
                            filterSelectedOptions
                            onChange={e => console.log(e.target)}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="filterSelectedOptions"
                                    placeholder="Favorites"
                                />
                            )}
                        />

                        <Autocomplete
                            multiple
                            id="tags-outlined"
                            options={top100Films}
                            getOptionLabel={(option) => option.title}
                            filterSelectedOptions
                            onChange={e => console.log(e.target)}
                            renderInput={(params) => (
                                <TextField
                                    select
                                    name="userRoles"
                                    variant="outlined"
                                    label="userRoles"
                                    SelectProps={{
                                        multiple: true,
                                        value: formState.userRoles,
                                        onChange: handleFieldChange
                                    }}
                                    {...params}
                                >
                                    {/*<MenuItem value="admin">Admin</MenuItem>*/}
                                    {/*<MenuItem value="user1">User1</MenuItem>*/}
                                    {/*<MenuItem value="user2">User2</MenuItem>*/}
                                </TextField>
                            )}
                        />

                        {/*<TextField*/}
                        {/*    select*/}
                        {/*    name="userRoles"*/}
                        {/*    id="userRoles"*/}
                        {/*    variant="outlined"*/}
                        {/*    label="userRoles"*/}
                        {/*    SelectProps={{*/}
                        {/*        multiple: true,*/}
                        {/*        value: formState.userRoles,*/}
                        {/*        onChange: handleFieldChange*/}
                        {/*    }}*/}
                        {/*>*/}
                        {/*    <MenuItem value="admin">Admin</MenuItem>*/}
                        {/*    <MenuItem value="user1">User1</MenuItem>*/}
                        {/*    <MenuItem value="user2">User2</MenuItem>*/}
                        {/*</TextField>*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MultipleSelectPage;