import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
//import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{paddingTop: '20px',display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'}}>
        <Box sx={{ width: '80%', typography: 'body1' }}>
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant = "fullWidth"
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                    centered
                >
                        <Tab style={{/*"color": "red",*/ "backgroundColor": 'lightgray'}} label="Agent 1" value="1" />
                        <Tab style={{"backgroundColor": 'lightgray'}} label="Agent 2" value="2" />
                        <Tab style={{"backgroundColor": 'lightgray'}} label="Agent 3" value="3" />
                        <Tab style={{"backgroundColor": 'lightgray'}} label="Agent 4" value="4" />
                        <Tab style={{"backgroundColor": 'lightgray'}} label="Agent 5" value="5" />
                        <Tab style={{"backgroundColor": 'lightgray'}} label="Agent 6" value="6" />
                    </Tabs>
            
            </Box>
            <TabPanel style={{"backgroundColor": 'gray'}} value="1">
            
            As far as our agent strategy goes, we have created an agent that adapts to the circumstances. Every day, 
            depending on their hunger (HP), their morality and mood will change in `changeNewDay(agent a)`. If that day
            there has been a reshuffling, the mood will also change depending on the new floor number we are in as well 
            as restarting some knowledge variables like who their neighbours are. Every tick we try to eat and calculate 
            how much the agent would like to eat with the takeFoodCalculation function. If it manages to eat, decisions are reset.
            </TabPanel>
            <TabPanel style={{"backgroundColor": 'gray'}} value="2">

            Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents 
            Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents 
            Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents 
            Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents 
            Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents 
            </TabPanel>
            <TabPanel  style={{"backgroundColor": 'gray'}} value="3">
            
            Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents 
            Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents 
            Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents 
            Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents 
            Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents 
            </TabPanel>
            <TabPanel style={{"backgroundColor": 'gray'}}  value="4">
            
            Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents 
            Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents 
            Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents 
            Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents 
            Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents 
            </TabPanel>
            <TabPanel  style={{"backgroundColor": 'gray'}} value="5">
            
            Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents 
            Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents 
            Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents 
            Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents 
            Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents 
            </TabPanel>
            <TabPanel  style={{"backgroundColor": 'gray'}} value="6">
            
            Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents 
            Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents 
            Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents 
            Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents 
            Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents 
            </TabPanel>
        </TabContext>
        </Box>
    </div>
  );
}