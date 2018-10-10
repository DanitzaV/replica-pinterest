import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import qwest from 'qwest';


class Ejemplo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tracks: [],
            hasMoreItems: true,
            nextHref: null,
            page: 1,
        };
    }

    loadItems() {
        var self = this;

        var url = `https://api.unsplash.com/search/photos?page=${this.state.page}&query=iphone&client_id=a322a1eeefcea7de09bd284c21489afcb274af47aed1dbda8a9e197546780f93`;
        // if(this.state.nextHref) {
        //     url = this.state.nextHref;
        // }

        qwest.get(url, {
                cache: true
            })
            .then(function(xhr, resp) {
                if(resp) {
                    console.log(resp)
                    var tracks = self.state.tracks;
                    resp.results.map((track) => {
                        console.log(track)
                        // if(track) {
                        //     track.artwork_url = track.user.avatar_url;
                        // }

                        tracks.push(track);
                        
                    });

                    if(resp.next_href) {
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

    render() {
        const loader = <div className="loader">Loading ...</div>;

//         var items = [];
//         this.state.tracks.map((track, i) => {
//             items.push(
//                 <div className=" items" key={i}>
//                         <img src={track.urls.small}  />
//                 </div>
//             );
//         });
// console.log(items)
        return (
            <InfiniteScroll
                pageStart={0}
                loadMore={this.loadItems.bind(this)}
                hasMore={this.state.hasMoreItems}
                loader={loader}>

               
                        <div className=" container">
                    {
                        this.state.tracks.map((track, i) => {
            return(
                <div className=" items" key={i}>
                        <img src={track.urls.small}  />
                </div>
            );
        })}
                </div>
            </InfiniteScroll>
        );
    }
};
export default Ejemplo;