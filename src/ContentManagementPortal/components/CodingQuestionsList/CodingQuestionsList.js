import React from 'react';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { observable } from 'mobx';
import { Header } from '../Header';
import { CreateCodingQuestions } from '../CreateCodingQuestions';
import { CodingQuestionsListView, RenderQuestions } from './CodingQuestionsListStyle';
import { GoBack } from '../GoBack';
import { CodingQuestions } from '../CodingQuestions';
import { Add_Coding_Questions_Path } from '../../constants/RouteConstants/Navigation';
import { Redirect } from 'react-router-dom';

@observer
class CodingQuestionsList extends React.Component {

    render() {
        const {
            signOut,
            doNetworkCalls,
            getCodingQuestionsListAPIStatus,
            getCodingQuestionsListAPIError,
            codingQuestionsList,
            onChangeSearchText,
            onChangeSortBy,
            questions,
            currentPagePositionIncrementor,
            currentPagePositionDecrementor,
            currentPagePosition,
            totalCountOfPages
        } = this.props;
        return (
            <CodingQuestionsListView>
                <Header signOut={signOut} />
                <CodingQuestions doNetworkCalls={doNetworkCalls} currentPagePositionIncrementor={currentPagePositionIncrementor} currentPagePositionDecrementor={currentPagePositionDecrementor} currentPagePosition={currentPagePosition} totalCountOfPages={totalCountOfPages} getCodingQuestionsListAPIStatus={getCodingQuestionsListAPIStatus} getCodingQuestionsListAPIError={getCodingQuestionsListAPIError} onChangeSortBy={onChangeSortBy} onChangeSearchText={onChangeSearchText} codingQuestionsList={questions} />
            </CodingQuestionsListView>
        );
    }
}

export default CodingQuestionsList;
