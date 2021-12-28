import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'


const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    fontFamily: 'Trebuchet MS',
    textDecorationThickness: 50,
};


function createData(name, AgentDescription) {
  return { name, AgentDescription }
}

const Agent1Desc =
  "For team 1's agent, our strategy "

const Agent2Desc =
  "Our agent will counteract the strategies o"

const Agent3Desc =
  "Team 3's agent has an emphasis on being highly parameterised. "

const Agent4Desc =
  "We have implemented a truthful agent, which is only be able to deviate"

const Agent5Desc =
  "Team 5's agent is driven by historical data to form opinions on other agents. This knowledge formation is used to evaluate future steps of action that include foraging decisions, gifting decisions, common pool contributions and role management, as well as disaster forecasting. This enables our agent to engage in more complex yet more stochastic decision making. Our agent can be characterised as fair and generous, and it has been designed to support the rest of the agent community when necessary. The latter is particularly true when there is open communication of data between islands. However, our agent can be biased at times in order to ensure our island's survival when resources are scarce."

const Agent6Desc =
  'Our decision-making is based on economic and relationship aspects. Depending on the resources we own, we act in different personalities in the game of investment. Likewise, we trust our friends and help each other in the game of sustainability. We evaluate the collective precautionary measure by comparing taxation with our prediction of disaster, and always advocate for a surplus of common-pool contribution. When we are elected for roles, we take the responsibility to maintain fairness and justice, with the premise that our friends benefit from all the moves.'

const rows = [
  createData('Team 1', Agent1Desc),
  createData('Team 2', Agent2Desc),
  createData('Team 3', Agent3Desc),
  createData('Team 4', Agent4Desc),
  createData('Team 5', Agent5Desc),
  createData('Team 6', Agent6Desc),
]

export default function AgentTable() {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 400 }}
        size="medium"
        aria-label="customized table"
      >
        <colgroup>
          <col style={{ width: '10%' }} />
          <col style={{ width: '90%' }} />
        </colgroup>
        <TableHead>
          <TableRow style={mystyle}>
            <TableCell> Team Number</TableCell>
            <TableCell align="left" > Agent Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              style={{ backgroundColor: 'white', color: 'white' }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.AgentDescription}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
