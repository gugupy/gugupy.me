'use client';

import React, { useState, useEffect, use } from 'react';
import { Card, SmartLink, Spinner, Column, Row, TiltFx, Heading, Text, Accordion, Tag } from '../once-ui/components'; // Replace with Once UI components
import { gitHub } from '@/app/resources/content';

interface GitHubProps {
    label: string,
    title: string,
    description: string,
    username: string,
    contributions: Array<{
        repoName: string;
        repoUrl: string;
        contributions: Array<{
            title: string;
            url: string;
            type: string;
        }>;
    }>;
}

function GitHubContributions() {
    const [repo, setRepo] = useState<GitHubProps>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Simulate API call with dummy data
        setTimeout(() => {
            setRepo(gitHub);
            setLoading(false);
        }, 1000); // Simulate 1 second delay
    }, []);



    // ... rest of your component code ...
    if (loading) {
        return <Spinner />; // Once UI loading spinner
    }

    if (error) {
        return <Card>Error: {error}</Card>; // Once UI card for error
    }


    return (
        <>
            <Column fillWidth>
                <Column paddingX='12' paddingY='12' gap='8' fillWidth overflowY='auto' overflowX='hidden' background='transparent'>
                    {repo && <Heading as='h2' paddingY='12'>{repo.title}</Heading>}
                    <img src="https://ghchart.rshah.org/gugupy" alt="GitHub Contribution Graph" />
                    {repo?.contributions
                        .map((repo) => (
                            <Accordion title={repo.repoName} fillWidth>
                                <Column paddingX='12' paddingY='12' gap='8'>
                                    <Column gap="8">
                                        {repo.contributions.map((contribution: any, index: any) => (
                                            <SmartLink
                                                key={index}
                                                href={contribution.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Row gap='4'>
                                                    <Text>- {contribution.title}</Text> <Tag>{contribution.type}</Tag>
                                                </Row>
                                            </SmartLink>
                                        ))}
                                    </Column>
                                </Column>
                            </Accordion>
                        ))}
                </Column >
            </Column >
        </>

    );
}

export default GitHubContributions;