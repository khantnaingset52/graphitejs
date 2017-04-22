import { Component, PropTypes } from 'react';
import { graphql } from 'react-apollo';

import List from '../components/List';
import Table from '../components/Table';

import { all } from '../graphql/schools';

export class SchoolList extends Component {
  static propTypes = {
    mutate: PropTypes.func,
    data: PropTypes.shape({
      loading: PropTypes.boolean,
      error: PropTypes.object,
    }),
  }

  static defaultProps = {
    loading: true,
    data: {
      schools: [],
    },
  }

  constructor() {
    super();
  }

  render() {
    const { data: { loading, error, schools } } = this.props;
    const items = !loading && !error ? schools.map(school => ({ label: school.name, value: school.name })) : [];
    return (
      <div>
        <h2>Schools</h2>
        <Table items= {schools} omit={['__typename', 'active']} />
      </div>
    );
  }
}

const options = { pollInterval: 300 };
export default graphql(all, { options })(SchoolList);