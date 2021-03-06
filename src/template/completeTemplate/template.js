import React from 'react';
import All from '../All/All';
import Edaran from '../Edaran/Edaran';
import Undangan from '../Undangan/Undangan';
import Lamaran from '../Lamaran/Lamaran';
import Izin from '../Izin/Izin';
import Keterangan from '../Keterangan/Keterangan';
import Pesan from '../Pesan/Pesan';

export default class Template extends React.Component {
    render() {
        if (this.props.enter === 'All') {
            return (
                <All />
            )

        } else if (this.props.enter === 'Undangan') {
            return (
                <Undangan />
            )
        } else if (this.props.enter === 'Lamaran') {
            return (
                <Lamaran />
            )
        } else if (this.props.enter === 'Izin') {
            return (
                <Izin />
            )
        } else if (this.props.enter === 'Pesan') {
            return (
                <Pesan />
            )
        } else if (this.props.enter === 'Keterangan') {
            return (
                <Keterangan />
            )
        }
        return (
            <Edaran />
        )

    }
}