var Heading = React.createClass({
     render: function() {
          return(
               <th>
                    {this.props.heading}
               </th>
          );
     }
});

var Headings = React.createClass({
     render: function() {
          var headings = this.props.headings.map(function(heading) {
               return <Heading key={heading.toString()} heading={heading} />;
          });
          return(
               <thead>
                    <tr>{headings}</tr>
               </thead>
          );
     }
})

var Row = React.createClass({
     render: function() {
          return(
               <tr>
                    <td>{this.props.standing.pos}</td>
                    <td>{this.props.standing.club}</td>
                    <td>{this.props.standing.pl}</td>
                    <td>{this.props.standing.gd}</td>
                    <td>{this.props.standing.pts}</td>
               </tr>
          );
     }
});

var Rows = React.createClass({
     render: function() {
          var rows = this.props.standings.map(function(row) {
               return <Row key={row.pos} standing={row} />;
          });
          return <tbody>{rows}</tbody>;
     }
});

var App = React.createClass({
     render: function() {
          return(
               <div className="col-12 inner p-4">
                    <table className="table table-hover table-responsive">
                         <Headings headings={this.props.headings} />
                         <Rows standings={this.props.standings} />
                    </table>
               </div>
          );
     }
});

var Header = React.createClass({
     render: function() {
          return(
               <div className="wrapper p-3 mt-3">
                    <h1 className="display-4">{this.props.title}</h1>
                    <p className="lead">From 18. May 2017</p>
               </div>
          );
     }
});

var Copyright = React.createClass({
     render: function() {
          return(
               <div className="col-12">
                    <p className="lead text-center p-3 mb-0">Made with <i className="fa fa-heart"></i> by Hanan Mufti</p>
               </div>
          );
     }
});

var title = "Premier League Standings";

var heading = ["Position", "Club", "Played", "Goal Difference", "Points"];

var standings = [{
          pos: 1,
          club: "FC Chelsea",
          pl: 37,
          gd: "+48",
          pts: 90
     },
     {
          pos: 2,
          club: "Tottenham Hotspur",
          pl: 36,
          gd: "+49",
          pts: 80
     },
     {
          pos: 3,
          club: "Manchester City",
          pl: 37,
          gd: "+36",
          pts: 75
     },
     {
          pos: 4,
          club: "Liverpool",
          pl: 37,
          gd: "+33",
          pts: 73
     },
     {
          pos: 5,
          club: "Arsenal",
          pl: 37,
          gd: "+31",
          pts: 72
     },
     {
          pos: 6,
          club: "Manchester United",
          pl: 37,
          gd: "+23",
          pts: 66
     },
     {
          pos: 7,
          club: "Everton",
          pl: 37,
          gd: "+20",
          pts: 61
     },
     {
          pos: 8,
          club: "Southampton",
          pl: 37,
          gd: "-6",
          pts: 46
     },
     {
          pos: 9,
          club: "West Brom",
          pl: 37,
          gd: "-7",
          pts: 45
     },
     {
          pos: 10,
          club: "Bournemouth",
          pl: 37,
          gd: "-12",
          pts: 45
     },
];

ReactDOM.render(
     <Header title={title} />,
     document.getElementById('title')
);

ReactDOM.render(
     <App headings={heading} standings={standings} />,
     document.getElementById('app')
)

ReactDOM.render(
     <Copyright />,
     document.getElementById('copyright')
)