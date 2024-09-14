import React, { Component } from 'react';
import QRCode from "react-qr-code";

class GenerateQRDiv extends Component {
	constructor(props) {
		super(props)
		this.state = { text: '', productId: '' }
	}

	handleChange = (e) => {
		const { name, value } = e.target
		this.setState({ [name]: value })
	}

	render() {
		return (
			<div id="content" className="mt-4">

				<h5 className="text-center"><i>Generate a QR code</i></h5>

				<form className="my-3" onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label htmlFor="productId">Product ID</label>
						<input type="text" className="form-control" placeholder="Enter a product ID"
							name="productId"
							value={this.state.productId} onChange={this.handleChange}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="text">Address</label>
						<input type="text" className="form-control" placeholder="Enter an address"
							name="text"
							value={this.state.text} onChange={this.handleChange}
						/>
					</div>
				</form>

				<QRCode value={`${this.state.productId} ${this.state.text}`} />

			</div>
		);
	}
}

export default GenerateQRDiv;
