import React, { Component } from 'react'
import { httpGET } from '../util/http_client'
import { BINANCE_API_URL_BASE as BASE } from '../conf/conf'
import { Button } from 'react-bootstrap'

export default class CoinDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            trades: null,
        }
        //<Route path='/bitcoin_rate/:symbol' の:symbolの部分は
        //こんな感じで取得できる↓
        this.symbol = props.match.params
    }

    componentWillMount(){
        this.getCoinDetail()
    }

    getCoinDetail = () => {
        let url = BASE + 'api/v1/trades?symbol=' + this.symbol
        httpGET(url).then(res => {
            res = JSON.parse(res)
            this.setState({
                trades: res,
            })
        }).catch(err => {
            console.log('getCoinDetail fail with ' + err)
        })
    }

    render(){
        return(
            <div>
            <div>{this.symbol}</div>
            <Button onClick={this.props.delCoin(this.symbol)}>表示から消す</Button>
            <br/>
            </div>
        )
    }
}