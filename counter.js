var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },
    
    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

  render: function() {
      return (React.createElement('div', {},
            React.createElement('button', {onClick: this.increment}, 'Dodaj'),
            React.createElement('button', {onClick: this.decrement}, 'Odejmij'),
            React.createElement('span', {}, 'Stan licznika: ' + this.state.counter)
    ));
  },

    componentWillMount: function() {
    console.log('Ustawienie stanu początkowego przed pierwszym renderem');
    },

    componentDidMount: function() {
        console.log('Pobieranie danych z serwera');
    },

    componentWillReceiveProps: function() {
        console.log('Dokonanie kalkulacji po wprowadzeniu zmian, a przed kolejnym renderem');
    },

    ShouldComponentUpdate: function() {
        console.log('Przydatne w przypadkach, gdy trzeba sprawdzić, czy ponowne renderowanie jest potrzebne - służy optymalizacji');
    },

    componentWillUpdate: function() {
        console.log('Przygotowanie się na zmianę stanu, np. przy tworzeniu animacji');
    },

    componentDidUpdate: function() {
        console.log('Zapytanie do serwera po aktualizacji danych');
    },

    componentWillUnmount: function() {
        console.log('Usunięcie timerów bądź listenerów');
    }  
});

var element = React.createElement('div', {},
    React.createElement(Counter),
    React.createElement(Counter)
);

ReactDOM.render(element, document.getElementById('app'));

