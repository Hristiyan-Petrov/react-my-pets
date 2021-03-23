import { Component } from "react";
import * as petServise from "../../services/petServise";
import Pet from "../Pet/Pet";
import CategoryNavigation from './CategoryNavigation/CategoryNavigation';

class Categories extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pets: [],
            currentCategory: 'all'
        }
    }

    componentDidMount() {
        petServise.getAll()
            .then(res => this.setState({ pets: res }))
    }

    componentDidUpdate(prevProps) {
        let category = this.props.match.params.category;
        
        if (prevProps.match.params.category == category) {
            return;
        }
        
        petServise.getAll(category)
            .then(res => {
                this.setState({ pets: res, currentCategory: category })
            })

    }

    render() {
        return (
            <section className="dashboard">
                <h1>Dashboard</h1>

                <CategoryNavigation />

                <ul className="other-pets-list">
                    {this.state.pets.map(x =>
                        <Pet key={x.id} {...x} />
                    )}
                </ul>
            </section>
        );
    }
}

export default Categories;