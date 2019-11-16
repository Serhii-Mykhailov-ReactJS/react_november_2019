// Core
import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import cx from 'classnames';
// UI
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// Engines
import { actions } from '../../engine/todos/actions';
// Styles
import { useStyles } from './HomeStyles';

function Home(props) {
  const classes = useStyles();
  // todos - попал в компонент из mapStateToProps
  // addTodo - попал в компонент из mapDispatchToProps
  const { todos, addTodo } = props;

  // react-redux hook useDispatch - позволяет получить dispatch из контекста
  // https://react-redux.js.org/api/hooks#usedispatch
  // const dispatch = useDispatch();

  // react-redux hook useSelector - позволяет получить любое значение store из контекста
  // https://react-redux.js.org/api/hooks#useselector
  // const todos1 = useSelector((state) => state.todos.todos);

  // react-redux hook useStore - позволяет получить доступ к объекту store
  // https://react-redux.js.org/api/hooks#usestore

  // React.useEffect(() => {
  //   addTodo({ 'bbc': true });
  // }, []);

  // action используя react hooks
  // const addTodo = useCallback(() => {
  //   // отправка action в редюсер при помощи hooks
  //   dispatch(actions.addTodo({ 'bbc': true }));
  // }, [dispatch]);

  function onButtonClick() {
    // отправка action в редюсер
    addTodo({ 'bbc': true });
  }

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={cx(classes.paper, classes.fixedHeight)}>
            <Typography variant="h6" gutterBottom>
              Home page:
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, explicabo voluptate! Accusantium, atque autem
              cumque dicta eum, explicabo inventore ipsam ipsum nam odio quaerat quia quidem quo saepe sit tempora.
            </Typography>
            <br />
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, explicabo voluptate! Accusantium, atque autem
              cumque dicta eum, explicabo inventore ipsam ipsum nam odio quaerat quia quidem quo saepe sit tempora.
            </Typography>
            <button onClick={onButtonClick}>
              add todo
            </button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

// Позволяет добавить данные из store в props компонента
// Функция принимает два аргумента, state и ownProps
// state - объект состояния
// ownProps - текущие пропсы компонента
// https://react-redux.js.org/using-react-redux/connect-mapstate
function mapStateToProps(state) {
  // Возвращает объект, поля которого будут добавлены в props
  return {
    todos: state.todos.todos,
  };
}

// Позволяет отправить объект action в редюсер
// Функция принимает два параметра, dispatch и ownProps
// dispatch - функция, которая принимает один аргумент, объект action
// ownProps - текущие пропсы компонента
// https://react-redux.js.org/using-react-redux/connect-mapdispatch
function mapDispatchToProps(dispatch) {
  // Возвращает объект, поля которого будут добавлены в props
  return {
    addTodo: todo => dispatch(actions.addTodo(todo)),
  };
}

// Позволяет получить компоненту доступ к store
// https://react-redux.js.org/api/connect
// При использовании react-redux hooks функция connect не нужна
export default connect(mapStateToProps, mapDispatchToProps)(Home);
