import React from 'react';
import ChwEditFormProps from './ChwEditFormProps';
import { FormStatus, readEventValueAsNum } from '../../../../api/chws';
import { Box, Button, Form, Heading } from 'grommet';
import Spinner from '../../../../components/Spinner/Spinner';
import ChwFormField from './ChwFormField';

const RabiesDutiesForm = (props: ChwEditFormProps) => {
  const { report, onSubmit, updateFn, formEvent } = props;

  if (formEvent.status === FormStatus.Submit) {
    return (
      <Box direction={'column'} fill>
        <Spinner size={228} />
      </Box>
    );
  }

  return (
    <Box
      direction={'column'}
      fill
      margin={{ left: 'medium' }}
      overflow={'auto'}
    >
      <Heading level={2}>Duties Performed: Rabies Campaigns</Heading>
      <Form onSubmit={onSubmit}>
        <Box
          direction={'row'}
          align={'start'}
          gap={'small'}
          margin={{ right: 'large', top: 'small' }}
        >
          <ChwFormField
            label={'1 - 4: '}
            maleValue={
              report.report.dutiesPerformed.rabiesCampaign.oneToFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.rabiesCampaign.oneToFour.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    rabiesCampaign: {
                      ...report.report.dutiesPerformed.rabiesCampaign,
                      oneToFour: {
                        ...report.report.dutiesPerformed.rabiesCampaign
                          .oneToFour,
                        male: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    rabiesCampaign: {
                      ...report.report.dutiesPerformed.rabiesCampaign,
                      oneToFour: {
                        ...report.report.dutiesPerformed.rabiesCampaign
                          .oneToFour,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'oneToFour.male'}
            femaleFieldName={'oneToFour.female'}
          />
          <ChwFormField
            label={'5 - 9: '}
            maleValue={
              report.report.dutiesPerformed.rabiesCampaign.fiveToNine.male
            }
            femaleValue={
              report.report.dutiesPerformed.rabiesCampaign.fiveToNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    rabiesCampaign: {
                      ...report.report.dutiesPerformed.rabiesCampaign,
                      fiveToNine: {
                        ...report.report.dutiesPerformed.rabiesCampaign
                          .fiveToNine,
                        male: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    rabiesCampaign: {
                      ...report.report.dutiesPerformed.rabiesCampaign,
                      fiveToNine: {
                        ...report.report.dutiesPerformed.rabiesCampaign
                          .fiveToNine,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'fiveToNine.male'}
            femaleFieldName={'fiveToNine.female'}
          />
          <ChwFormField
            label={'10 - 14: '}
            maleValue={
              report.report.dutiesPerformed.rabiesCampaign.tenToFourteen.male
            }
            femaleValue={
              report.report.dutiesPerformed.rabiesCampaign.tenToFourteen.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    rabiesCampaign: {
                      ...report.report.dutiesPerformed.rabiesCampaign,
                      tenToFourteen: {
                        ...report.report.dutiesPerformed.rabiesCampaign
                          .tenToFourteen,
                        male: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    rabiesCampaign: {
                      ...report.report.dutiesPerformed.rabiesCampaign,
                      tenToFourteen: {
                        ...report.report.dutiesPerformed.rabiesCampaign
                          .tenToFourteen,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'tenToFourteen.male'}
            femaleFieldName={'tenToFourteen.female'}
          />
          <ChwFormField
            label={'15 - 19: '}
            maleValue={
              report.report.dutiesPerformed.rabiesCampaign.fifteenToNineteen
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.rabiesCampaign.fifteenToNineteen
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    rabiesCampaign: {
                      ...report.report.dutiesPerformed.rabiesCampaign,
                      fifteenToNineteen: {
                        ...report.report.dutiesPerformed.rabiesCampaign
                          .fifteenToNineteen,
                        male: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    rabiesCampaign: {
                      ...report.report.dutiesPerformed.rabiesCampaign,
                      fifteenToNineteen: {
                        ...report.report.dutiesPerformed.rabiesCampaign
                          .fifteenToNineteen,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'fifteenToNineteen.male'}
            femaleFieldName={'fifteenToNineteen.female'}
          />
        </Box>
        <Box
          direction={'row'}
          align={'start'}
          gap={'small'}
          margin={{ right: 'large', top: 'small' }}
        >
          <ChwFormField
            label={'20 - 24: '}
            maleValue={
              report.report.dutiesPerformed.rabiesCampaign.twentyToTwentyFour
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.rabiesCampaign.twentyToTwentyFour
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    rabiesCampaign: {
                      ...report.report.dutiesPerformed.rabiesCampaign,
                      twentyToTwentyFour: {
                        ...report.report.dutiesPerformed.rabiesCampaign
                          .twentyToTwentyFour,
                        male: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    rabiesCampaign: {
                      ...report.report.dutiesPerformed.rabiesCampaign,
                      twentyToTwentyFour: {
                        ...report.report.dutiesPerformed.rabiesCampaign
                          .twentyToTwentyFour,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'twentyToTwentyFour.male'}
            femaleFieldName={'twentyToTwentyFour.female'}
          />
          <ChwFormField
            label={'25 - 29: '}
            maleValue={
              report.report.dutiesPerformed.rabiesCampaign
                .twentyFiveToTwentyNine.male
            }
            femaleValue={
              report.report.dutiesPerformed.rabiesCampaign
                .twentyFiveToTwentyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    rabiesCampaign: {
                      ...report.report.dutiesPerformed.rabiesCampaign,
                      twentyFiveToTwentyNine: {
                        ...report.report.dutiesPerformed.rabiesCampaign
                          .twentyFiveToTwentyNine,
                        male: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    rabiesCampaign: {
                      ...report.report.dutiesPerformed.rabiesCampaign,
                      twentyFiveToTwentyNine: {
                        ...report.report.dutiesPerformed.rabiesCampaign
                          .twentyFiveToTwentyNine,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'twentyFiveToTwentyNine.male'}
            femaleFieldName={'twentyFiveToTwentyNine.female'}
          />
          <ChwFormField
            label={'30 - 34: '}
            maleValue={
              report.report.dutiesPerformed.rabiesCampaign.thirtyToThirtyFour
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.rabiesCampaign.thirtyToThirtyFour
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    rabiesCampaign: {
                      ...report.report.dutiesPerformed.rabiesCampaign,
                      thirtyToThirtyFour: {
                        ...report.report.dutiesPerformed.rabiesCampaign
                          .thirtyToThirtyFour,
                        male: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    rabiesCampaign: {
                      ...report.report.dutiesPerformed.rabiesCampaign,
                      thirtyToThirtyFour: {
                        ...report.report.dutiesPerformed.rabiesCampaign
                          .thirtyToThirtyFour,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'thirtyToThirtyFour.male'}
            femaleFieldName={'thirtyToThirtyFour.female'}
          />
          <ChwFormField
            label={'35 - 39: '}
            maleValue={
              report.report.dutiesPerformed.rabiesCampaign
                .thirtyFiveToThirtyNine.male
            }
            femaleValue={
              report.report.dutiesPerformed.rabiesCampaign
                .thirtyFiveToThirtyNine.female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    rabiesCampaign: {
                      ...report.report.dutiesPerformed.rabiesCampaign,
                      thirtyFiveToThirtyNine: {
                        ...report.report.dutiesPerformed.rabiesCampaign
                          .thirtyFiveToThirtyNine,
                        male: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    rabiesCampaign: {
                      ...report.report.dutiesPerformed.rabiesCampaign,
                      thirtyFiveToThirtyNine: {
                        ...report.report.dutiesPerformed.rabiesCampaign
                          .thirtyFiveToThirtyNine,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'thirtyFiveToThirtyNine.male'}
            femaleFieldName={'thirtyFiveToThirtyNine.female'}
          />
        </Box>
        <Box
          direction={'row'}
          align={'start'}
          gap={'small'}
          margin={{ right: 'large', top: 'small' }}
        >
          <ChwFormField
            label={'40 - 44: '}
            maleValue={
              report.report.dutiesPerformed.rabiesCampaign.fortyToFortyFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.rabiesCampaign.fortyToFortyFour
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    rabiesCampaign: {
                      ...report.report.dutiesPerformed.rabiesCampaign,
                      fortyToFortyFour: {
                        ...report.report.dutiesPerformed.rabiesCampaign
                          .fortyToFortyFour,
                        male: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    rabiesCampaign: {
                      ...report.report.dutiesPerformed.rabiesCampaign,
                      fortyToFortyFour: {
                        ...report.report.dutiesPerformed.rabiesCampaign
                          .fortyToFortyFour,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'fortyToFortyFour.male'}
            femaleFieldName={'fortyToFortyFour.female'}
          />
          <ChwFormField
            label={'45 - 49: '}
            maleValue={
              report.report.dutiesPerformed.rabiesCampaign.fortyFiveToFortyNine
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.rabiesCampaign.fortyFiveToFortyNine
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    rabiesCampaign: {
                      ...report.report.dutiesPerformed.rabiesCampaign,
                      fortyFiveToFortyNine: {
                        ...report.report.dutiesPerformed.rabiesCampaign
                          .fortyFiveToFortyNine,
                        male: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    rabiesCampaign: {
                      ...report.report.dutiesPerformed.rabiesCampaign,
                      fortyFiveToFortyNine: {
                        ...report.report.dutiesPerformed.rabiesCampaign
                          .fortyFiveToFortyNine,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'fortyFiveToFortyNine.male'}
            femaleFieldName={'fortyFiveToFortyNine.female'}
          />
          <ChwFormField
            label={'50 - 54: '}
            maleValue={
              report.report.dutiesPerformed.rabiesCampaign.fiftyToFiftyFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.rabiesCampaign.fiftyToFiftyFour
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    rabiesCampaign: {
                      ...report.report.dutiesPerformed.rabiesCampaign,
                      fiftyToFiftyFour: {
                        ...report.report.dutiesPerformed.rabiesCampaign
                          .fiftyToFiftyFour,
                        male: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    rabiesCampaign: {
                      ...report.report.dutiesPerformed.rabiesCampaign,
                      fiftyToFiftyFour: {
                        ...report.report.dutiesPerformed.rabiesCampaign
                          .fiftyToFiftyFour,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'fiftyToFiftyFour.male'}
            femaleFieldName={'fiftyToFiftyFour.female'}
          />
          <ChwFormField
            label={'55 - 59: '}
            maleValue={
              report.report.dutiesPerformed.rabiesCampaign.fiftyFiveToFiftyNine
                .male
            }
            femaleValue={
              report.report.dutiesPerformed.rabiesCampaign.fiftyFiveToFiftyNine
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    rabiesCampaign: {
                      ...report.report.dutiesPerformed.rabiesCampaign,
                      fiftyFiveToFiftyNine: {
                        ...report.report.dutiesPerformed.rabiesCampaign
                          .fiftyFiveToFiftyNine,
                        male: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    rabiesCampaign: {
                      ...report.report.dutiesPerformed.rabiesCampaign,
                      fiftyFiveToFiftyNine: {
                        ...report.report.dutiesPerformed.rabiesCampaign
                          .fiftyFiveToFiftyNine,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'fiftyFiveToFiftyNine.male'}
            femaleFieldName={'fiftyFiveToFiftyNine.female'}
          />
        </Box>
        <Box
          direction={'row'}
          align={'start'}
          gap={'small'}
          margin={{ right: 'large', top: 'small' }}
        >
          <ChwFormField
            label={'60 - 64: '}
            maleValue={
              report.report.dutiesPerformed.rabiesCampaign.sixtyToSixtyFour.male
            }
            femaleValue={
              report.report.dutiesPerformed.rabiesCampaign.sixtyToSixtyFour
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    rabiesCampaign: {
                      ...report.report.dutiesPerformed.rabiesCampaign,
                      sixtyToSixtyFour: {
                        ...report.report.dutiesPerformed.rabiesCampaign
                          .sixtyToSixtyFour,
                        male: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    rabiesCampaign: {
                      ...report.report.dutiesPerformed.rabiesCampaign,
                      sixtyToSixtyFour: {
                        ...report.report.dutiesPerformed.rabiesCampaign
                          .sixtyToSixtyFour,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'sixtyToSixtyFour.male'}
            femaleFieldName={'sixtyToSixtyFour.female'}
          />
          <ChwFormField
            label={'65+: '}
            maleValue={
              report.report.dutiesPerformed.rabiesCampaign.sixtyFiveOrMore.male
            }
            femaleValue={
              report.report.dutiesPerformed.rabiesCampaign.sixtyFiveOrMore
                .female
            }
            maleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    rabiesCampaign: {
                      ...report.report.dutiesPerformed.rabiesCampaign,
                      sixtyFiveOrMore: {
                        ...report.report.dutiesPerformed.rabiesCampaign
                          .sixtyFiveOrMore,
                        male: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            femaleOnChange={(e) => {
              updateFn({
                ...report,
                report: {
                  ...report.report,
                  dutiesPerformed: {
                    ...report.report.dutiesPerformed,
                    rabiesCampaign: {
                      ...report.report.dutiesPerformed.rabiesCampaign,
                      sixtyFiveOrMore: {
                        ...report.report.dutiesPerformed.rabiesCampaign
                          .sixtyFiveOrMore,
                        female: readEventValueAsNum(e),
                      },
                    },
                  },
                },
              });
            }}
            maleFieldName={'sixtyFiveOrMore.male'}
            femaleFieldName={'sixtyFiveOrMore.female'}
          />
        </Box>
        <Box flex align={'start'} margin={{ left: 'xxsmall', top: 'medium' }}>
          <Button type={'submit'} label={'Save'} primary />
        </Box>
      </Form>
    </Box>
  );
};

export default RabiesDutiesForm;
