import React, {Component} from 'react';
import * as firebase from 'firebase';
import { View, Text} from "react-native";
import StarRating from 'react-native-star-rating';

export default class PostRating extends Component {
	constructor (props) {
		super(props);
		this.state = {
			rating: 0
		};
		const {postId} = props;
		this.commentsRef = firebase.database().ref(`postComments/${postId}`);
	}

_isMounted = false;

	componentDidMount () {

		this._isMounted = true;

		if (this._isMounted) {

			this.commentsRef.on("child_added", snapshot => {
			this.commentsRef.on("value", snap => {
				let comments = [];
				snap.forEach(row => {
					comments.push(parseInt(row.val().rating));
				});

				this.setState({
					rating: comments.reduce((previous, current) => previous + current, 0) / comments.length,
				});

				/*this.refs.rating.setCurrentRating(
					comments.reduce((previous, current) => previous + current, 0) / comments.length
				);*/
			})
		});

		}
	}

  componentWillUnmount() {
    this._isMounted = false;
  }

	render () {
		const {rating} = this.state;
		return (
<View style={{alignItems: 'flex-start', flexDirection: 'row', justifyContent: 'flex-start'}}>
      
      {rating ? <StarRating ref="rating" disabled={true} maxStars={5} emptyStar={'ios-star-outline'} fullStar={'ios-star'} halfStar={'ios-star-half'} iconSet={'Ionicons'} rating={rating} containerStyle={{width: 100, marginTop: 5}} starSize={20} emptyStarColor={'#f1c40f'} fullStarColor={'#f1c40f'} /> : <Text></Text>}

</View>
		)
	}
}