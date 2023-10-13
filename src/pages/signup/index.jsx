import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Login from './login';
import Signup from './signup';

const SignInOutContainer = () => {
    const [value, setValue] = useState(0)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const paperStyle = { width: 340, margin: "20px auto" }
    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box>
                        <Typography component={'div'}>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    return (
        <Paper elevation={20} style={paperStyle} component={'div'}>
            <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                onChange={handleChange}
                aria-label="disabled tabs example"
                component={'div'}

            >
                <Tab label="Sign In" component={'div'} />

                <Tab label="Sign Up" component={'div'} />
            </Tabs>
            <TabPanel value={value} index={0} component={'div'} >
                <Login handleChange={handleChange} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Signup />
            </TabPanel>
        </Paper>

    )
}

export default SignInOutContainer;