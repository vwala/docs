import React, { FC, useEffect, useState } from 'react'
import Modal from 'react-modal'
import Icon from '../Icon'
// import Search from './Search'
import SearchInput from './SearchInput'

interface SearchModalProps {
    isHome?: boolean
}

const SearchModal: FC<SearchModalProps> = ({ isHome }) => {

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const openModal = () => setModalIsOpen(true)
    const closeModal = () => setModalIsOpen(false)

    useEffect(() => {
        Modal.setAppElement('#___gatsby')
    }, [])

    return (
        <>
            <SearchInput isHome={isHome} onClick={openModal} />
            <Modal
                isOpen={modalIsOpen}
                // onAfterOpen={this.afterOpenModal} TODO ?
                onRequestClose={closeModal}
                shouldFocusAfterRender
                contentLabel="Search"
                shouldCloseOnEsc
                shouldReturnFocusAfterClose={false}
                overlay
                bodyOpen
            >
                <div onClick={closeModal} data-cy="close-modal">
                    <Icon name="Close" />
                </div>
                <div>
                    <Icon name="Search" />
                    <label htmlFor="globalsearch">Search</label>
                    {/* <Search /> */}
                </div>
            </Modal>
        </>
    )
}

export default SearchModal
