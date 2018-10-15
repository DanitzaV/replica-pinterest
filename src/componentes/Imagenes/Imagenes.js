import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import CircularProgress from './../CircularProgress/CircularProgress';
import qwest from 'qwest';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Modal from './../../Modal/Modal';
import ImgModal from '../../Modal/ModalBoot';

const styles = theme => ({
	paper: {
		position: 'absolute',
		width: theme.spacing.unit * 50,
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing.unit * 4,
	},
});


class Ejemplo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			tracks: [],
			hasMoreItems: true,
			nextHref: null,
			page: 1,
			open: false,
			item: [],
		};
	}


	loadItems() {
		var self = this;

		var url = `https://api.unsplash.com/search/photos?page=${this.state.page}&query=iphone&client_id=a322a1eeefcea7de09bd284c21489afcb274af47aed1dbda8a9e197546780f93`;
		qwest.get(url, {
			cache: true
		})
			.then(function (xhr, resp) {
				if (resp) {
					console.log(resp)
					var tracks = self.state.tracks;
					resp.results.map((track) => {
						console.log(track)
						tracks.push(track);
					});
					if (resp.next_href) {
						return
					} else {
						self.setState({
							hasMoreItems: true,
							page: self.state.page + 1
						});
					}
				}
			});
	}

	datos(e) {
		console.log(e)
		this.setState({ item: { img: e.urls.small, description: e.description, imguser: e.user.profile_image.small, user: e.user.name, web: e.links.html } })


	}
	handleOpen = () => {

		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};


	render() {
		const { classes } = this.props;
		const loader = <CircularProgress></CircularProgress>;
		return (
			<InfiniteScroll
				pageStart={0}
				loadMore={this.loadItems.bind(this)}
				hasMore={this.state.hasMoreItems}
				loader={loader}>
				<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
					<Masonry>
						{this.state.tracks.map((e, i) => (
							<div style={{ padding: "7px" }}>
								<img
									key={i}
									src={e.urls.small}
									onClick={() => {
										this.datos(e)
										this.handleOpen()
									}}
									style={{
										width: "100%",
										display: "block",
										marginBottom: "5px",
										borderRadius: "35px"
									}}
									alt=""
								/>
							</div>
						))}
					</Masonry>
					<ImgModal web={this.state.item.web} username={this.state.item.user} imguser={this.state.item.imguser} description={this.state.item.description} data={this.state.item} img={this.state.item.img} close={this.handleClose} open={this.state.open}></ImgModal>
				</ResponsiveMasonry>
			</InfiniteScroll>
		);
	}
};

Ejemplo.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Ejemplo);