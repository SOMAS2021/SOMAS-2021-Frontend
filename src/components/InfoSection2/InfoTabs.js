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

            Team 2's agent design is based on reinforcement learning. We set the agent to be in one of three states depending on 
            the hunger level. The agent has three actions it can perform; take no food, satisfice itself with food and satiate with 
            food. The three actions are given probabilities depending on the state the agent is in. The important part of our algorithm 
            is the reward calculation, which determines the likelihood of an agent choosing a specific action. This reward calculation 
            changes depending on the selfishness value of the agent, so the agent will prioritise itself as it becomes more selfish. 
            Reinforcement is introduced by the saving ratio which is included in the reward calculation. The saving ratio is defined as 
            number of agents saved / number of agents who would have died. The hope is then that the actions which are successful in the 
            collective and personal goal will be chosen more often.
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
            
            The group 7 agent is built with three different parameter types. The first one is their personality makeup which determines 
            default behaviour and mood. Each agent is initialised with a score between 0 to 100 for the Big 5 personality traits. The traits include 
            openness, conscientiousness, extraversion, agreeableness and neuroticism. These traits are thought to be the inate nature of the  agent 
            and do not get alterted throughout their life. They alter the behaviour of the agent in different ways when a certain scenario occurs. 
            The second parameter type is the mood of the agent. At the moment we are working with two conflicting moods of greediness and kindness. 
            These are initialised by their agreeableness value and then altered by various environmental factors. The last parameter type is the memory 
            of the agent. Here the agent stores data to track what they have gone through so far. For example what floors they have been on and their 
            opinion of other agents. Each day the greediness and kindness will be altered depending on what has happened so far and the agent will choose 
            to take "100 - kindness + greediness" amount of food.
            </TabPanel>
        </TabContext>
        </Box>
    </div>
  );
}