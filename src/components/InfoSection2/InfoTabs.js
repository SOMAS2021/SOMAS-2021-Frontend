import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@material-ui/core/Tabs';
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
    <div style={{display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'}}>
        <Box sx={{ width: '100%', typography: 'body1', boxShadow: "2px 5px 5px 2px #9E9E9E" }}>
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'green' }}>
            
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant = "fullWidth"
                    textColor="primary"
                    indicatorColor="primary"
                    aria-label="secondary tabs example"
                    centered
                >
                        <Tab style={{"backgroundColor": 'lightgray', color: 'green'}} label="Agent 1" value="1" />
                        <Tab style={{"backgroundColor": 'lightgray', color: 'green'}} label="Agent 2" value="2" />
                        <Tab style={{"backgroundColor": 'lightgray', color: 'green'}} label="Agent 3" value="3" />
                        <Tab style={{"backgroundColor": 'lightgray', color: 'green'}} label="Agent 4" value="4" />
                        <Tab style={{"backgroundColor": 'lightgray', color: 'green'}} label="Agent 5" value="5" />
                        <Tab style={{"backgroundColor": 'lightgray', color: 'green'}} label="Agent 6" value="6" />
                    </Tabs>
            
            </Box>
            <TabPanel style={{"backgroundColor": 'white', color: "black"}} value="1">
            Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents 
            Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents 
            Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents 
            Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents 
            Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents
            </TabPanel>
            <TabPanel style={{"backgroundColor": 'white', color: "black"}} value="2">

            Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents 
            Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents 
            Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents 
            Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents 
            Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents 
            </TabPanel>
            <TabPanel  style={{"backgroundColor": 'white', color: "black"}} value="3">
            
            As far as our agent strategy goes, we have created an agent that adapts to the circumstances. Every day, 
            depending on their hunger (HP), their morality and mood will change in `changeNewDay(agent a)`. If that day
            there has been a reshuffling, the mood will also change depending on the new floor number we are in as well 
            as restarting some knowledge variables like who their neighbours are. Every tick we try to eat and calculate 
            how much the agent would like to eat with the takeFoodCalculation function. If it manages to eat, decisions are reset. 
            </TabPanel>
            <TabPanel style={{"backgroundColor": 'white', color: "black"}}  value="4">
            
            Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents 
            Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents 
            Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents 
            Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents 
            Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents Descritption of Agents 
            </TabPanel>
            <TabPanel  style={{"backgroundColor": 'white', color: "black"}} value="5">
            
            The group 5 agent operates on the basis that, upon entering the tower, the need to ensure their own survival is their
            only aim, and should maximise their own hp whenever given the opportunity to do so. This situation can be thought
            of as a hawk dove game, where it is beneficial for all agents to take less food but any single agent doing 
            so is worse off if no other agents follow suit. Communication is key to break out of this situation. Our agent will
            attempt to establish relationships with surrounding agents (having parameters to judge each other agent, while trying
            to learn about the tower) and encourage behaviours that benefit the overall tower utility. However, the agent will 
            also be influenced by the behaviour of agents around it. If other agents are being selfish then it will also be 
            selfish. This can be thought of as a tit for tat strategy, but when at high enough hp levels, it will be willing 
            to make the first move, with the insurance that if others do not follow suit then they have buffer time to re-establish 
            its own selfish behaviour. At low hp, it will only maintain this if confident that other agents will allow them to 
            do so and survive. A tower of just our agents would require those at the top to be willing to decrease its own satisfaction 
            in the short term in order to give the best chance of survival for all agents, trusting others to do the same upon 
            reshuffling.
            </TabPanel>
            <TabPanel  style={{"backgroundColor": 'white', color: "black"}} value="6">
            
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