import React, { Component } from 'react';
import { Button, Grid, Header, Icon, Image, Segment, Responsive } from 'semantic-ui-react';
import { instanceOf } from 'prop-types';

class BlogHeader extends Component {
    static propTypes = { user: instanceOf(Object).isRequired };

    render() {
        return (
            <div className="blog-header">
                <Image centered circular src={`/api/images/${this.props.user.pictureUrl}`}/>
                <Segment textAlign={'left'}>
                        <Grid padded >
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <Header as={'h1'}>{this.props.user.fullName}</Header>
                                </Grid.Column>
                                <Grid.Column textAlign={'right'} width={8} floated={'right'} >
                                    <Header.Subheader>{`${this.props.user.postCount} posts`}</Header.Subheader>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={8} >
                                    <Header.Subheader>{`${this.props.user.city}, ${this.props.user.country}`}</Header.Subheader>
                                </Grid.Column>
                                <Grid.Column textAlign={'right'} width={8} floated={'right'} >
                                    <Button compact size={'mini'} floated={'right'}><Icon name={'plus'} size={'mini'}/>{'Add friend'.toUpperCase()}</Button>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                </Segment>
            </div>
        );
    }
}

export default BlogHeader;
